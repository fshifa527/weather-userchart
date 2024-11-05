import React from 'react';
import { jsPDF } from 'jspdf';
import html2pdf from 'html2pdf.js';

const PDFExport = ({ userTableRef, weatherChartRef }) => {
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.html(userTableRef.current, {
      callback: (doc) => {
        doc.addPage();
        doc.html(weatherChartRef.current, {
          callback: () => {
            doc.save('dashboard.pdf');
          },
        });
      },
    });
  };

  return <button onClick={exportToPDF}>Export to PDF</button>;
};

export default PDFExport;
