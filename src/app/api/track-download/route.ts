import { NextRequest, NextResponse } from "next/server";

// TESTING MODE: Set to false once Google Sheets is configured
const TESTING_MODE = true;
const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL || "";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // In testing mode, just log
    if (TESTING_MODE || !GOOGLE_SHEETS_URL) {
      console.log(`📥 Download: ${data.document} by ${data.email}`);

      return NextResponse.json({
        success: true,
        message: "Download tracked (testing mode)",
        testMode: true,
      });
    }

    // Production mode: Track in Google Sheets
    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sheet: "Document-Downloads",
          ...data,
        }),
      });
    } catch (sheetsError) {
      console.error("Google Sheets error:", sheetsError);
      // Continue anyway - tracking failure shouldn't block downloads
    }

    return NextResponse.json({
      success: true,
      message: "Download tracked",
    });
  } catch (error) {
    console.error("Download tracking error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to track download" },
      { status: 500 }
    );
  }
}
