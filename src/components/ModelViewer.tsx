"use client";

interface ModelViewerProps {
  modelFile?: string;
  productName: string;
}

export default function ModelViewer({ modelFile, productName }: ModelViewerProps) {
  if (!modelFile) {
    return (
      <div className="flex aspect-square max-w-md items-center justify-center rounded-xl border border-border bg-surface-light">
        <div className="text-center">
          <div className="mb-3 text-4xl text-silver-dim">⬡</div>
          <p className="text-sm font-medium text-silver-dim">3D Model Coming Soon</p>
          <p className="mt-1 text-xs text-silver-dim/60">{productName}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-square max-w-md overflow-hidden rounded-xl border border-border bg-surface-light">
      <iframe
        src={`https://www.edrawingsviewer.com/view?file=${encodeURIComponent(modelFile)}`}
        className="h-full w-full"
        title={`3D model of ${productName}`}
        allowFullScreen
      />
    </div>
  );
}
