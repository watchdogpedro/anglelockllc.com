import { NextRequest, NextResponse } from "next/server";

// TESTING MODE: Set to false once Google Sheets is configured
const TESTING_MODE = true;
const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL || "";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // In testing mode, just log and allow access
    if (TESTING_MODE || !GOOGLE_SHEETS_URL) {
      console.log("=== NDA SUBMISSION (TESTING MODE) ===");
      console.log("Name:", data.fullName);
      console.log("Email:", data.email);
      console.log("Company:", data.company);
      console.log("Title:", data.title);
      console.log("Phone:", data.phone);
      console.log("Investor Type:", data.investorType);
      console.log("Investment Range:", data.investmentRange);
      console.log("Timestamp:", data.timestamp);
      console.log("=====================================");

      return NextResponse.json({
        success: true,
        message: "NDA accepted successfully (testing mode)",
        testMode: true,
      });
    }

    // Production mode: Submit to Google Sheets
    try {
      const sheetsResponse = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sheet: "NDA-Submissions",
          ...data,
        }),
      });

      if (!sheetsResponse.ok) {
        throw new Error("Failed to submit to Google Sheets");
      }
    } catch (sheetsError) {
      console.error("Google Sheets error:", sheetsError);
      // Continue anyway - better to allow access than block it
    }

    return NextResponse.json({
      success: true,
      message: "NDA accepted successfully",
    });
  } catch (error) {
    console.error("NDA submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process NDA submission" },
      { status: 500 }
    );
  }
}
