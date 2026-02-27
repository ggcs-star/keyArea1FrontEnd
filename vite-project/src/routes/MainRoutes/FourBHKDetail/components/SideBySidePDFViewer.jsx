import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const SideBySidePDFViewer = ({ fileUrl, onError }) => {
  const [numPages, setNumPages] = useState(null);

  const handleLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="w-full h-full overflow-auto bg-gray-100 p-4">
      <Document
        file={fileUrl}
        onLoadSuccess={handleLoadSuccess}
        onLoadError={(err) => {
          console.error("PDF load error:", err);
          if (onError) onError(err);
        }}
      >
        {/* Render 2 pages side by side */}
        <div className="flex flex-col items-center gap-6">
          {Array.from(new Array(numPages), (_, i) => {
            if (i % 2 === 0) {
              return (
                <div
                  key={i}
                  className="flex flex-wrap justify-center gap-6 w-full"
                >
                  <Page pageNumber={i + 1} width={400} />
                  {i + 1 < numPages && <Page pageNumber={i + 2} width={400} />}
                </div>
              );
            }
            return null;
          })}
        </div>
      </Document>
    </div>
  );
};

export default SideBySidePDFViewer;
