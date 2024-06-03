import React, { useState } from 'react';
import "../style/Publication.css";

const Publications = () => {
  const publications = [
    {
      title: 'Abnormal Morphology and Synaptogenic Signaling in Astrocytes Following Prenatal Opioid Exposure',
      authors: 'Niebergall, E. B., Weekley, D., Mazur, A., Olszewski, N. A., DeSchepper, K. M., Radant, N., Vijay, A. S., & Risher, W. C.',
      year: '2024',
      journal: 'Cells',
      volume: '13(10)',
      pages: '837',
      doi: 'https://doi.org/10.3390/cells13100837',
      pdf: '/Daron/Publication-2.pdf'
    },
    {
      title: 'Role of dipA and pilD in Francisella tularensis Susceptibility to Resazurin',
      authors: 'Souder, K., Beatty, E. J., Mcgovern, S. C., Whaby, M., Young, E., Pancake, J., Weekley, D., Rice, J., Primerano, D. A., Denvir, J., Horzempa, J., and Schmitt, D. M.',
      year: '2021',
      journal: 'Antibiotics',
      volume: '10(992)',
      pages: '1–10',
      doi: 'https://doi.org/10.3390/antibiotics10080992',
      pdf: '/Daron/antibiotics-10-00992.pdf'
    },
  ];
  const [visiblePdfs, setVisiblePdfs] = useState([]);

  const togglePdfVisibility = (index) => {
    setVisiblePdfs((prevVisiblePdfs) =>
      prevVisiblePdfs.includes(index)
        ? prevVisiblePdfs.filter((i) => i !== index)
        : [...prevVisiblePdfs, index]
    );
  };

  return (
    <div className='story-container'>
      <h1 className='publication'>Publications</h1>
      {publications.map((pub, index) => (
        <div key={index}>
          <div 
            onClick={() => togglePdfVisibility(index)} 
            className='pdf-banner'
            style={{ 
              cursor: 'pointer', 
              padding: '20px', 
              backgroundColor: '#f0f0f0', 
              textAlign: 'center', 
              margin: '20px 50px',
              border: '1px solid #ccc'
            }}
          >
            {visiblePdfs.includes(index) ? 'Click to Close PDF' : (
              <span>
                <strong>{pub.authors} ({pub.year}). {pub.title}. {pub.journal}, {pub.volume}, {pub.pages}. <br />
                {pub.doi}</strong>
              </span>
            )}
          </div>
          
          {visiblePdfs.includes(index) && (
            <iframe 
              src={pub.pdf} 
              width="800" 
              height="600"
              style={{ border: 'none', marginTop: '20px' }}
              title="PDF Viewer"
            >
              Sorry, your browser does not support PDFs. <a href={pub.pdf}>Download PDF</a>
            </iframe>
          )}
        </div>
      ))}
    </div>
  );
}

export default Publications;