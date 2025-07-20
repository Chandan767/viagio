import React from 'react';
import html2pdf from 'html2pdf.js';

const DownloadButton = () => {
  const handleDownload = () => {
    const element = document.getElementById('pdf-content');
    const opt = {
      margin:       0.5,
      filename:     'Vigovia_Itinerary.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="text-center mt-6">
      <button
        onClick={handleDownload}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md"
      >
        Download Itinerary PDF
      </button>
    </div>
  );
};

export default DownloadButton;
