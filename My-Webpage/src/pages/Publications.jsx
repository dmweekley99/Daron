import React, { useState, useEffect } from 'react';
import "../style/Publication.css";

const Publications = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const publications = [
    {
      title: 'Evaluating the Suitability of Different Intraoral Scan Resolutions for Deep Learning-Based Tooth Segmentation',
      authors: 'Weekley, D., Duckworth, J., Sukhanova, A., Jana, A.',
      year: '2025',
      journal: 'ArXiv',
      volume: 'abs/2502.19515',
      doi: 'https://doi.org/10.48550/arXiv.2502.19515',
      pdf: '/CS-Teeth-firstauthor.pdf'
    },
    {
      title: 'Abnormal Morphology and Synaptogenic Signaling in Astrocytes Following Prenatal Opioid Exposure',
      authors: 'Niebergall, E. B., Weekley, D., Mazur, A., Olszewski, N. A., DeSchepper, K. M., Radant, N., Vijay, A. S., & Risher, W. C.',
      year: '2024',
      journal: 'Cells',
      volume: '13(10)',
      pages: '837',
      doi: 'https://doi.org/10.3390/cells13100837',
      pdf: '/Publication-2.pdf'
    },
    {
      title: 'Role of dipA and pilD in Francisella tularensis Susceptibility to Resazurin',
      authors: 'Souder, K., Beatty, E. J., Mcgovern, S. C., Whaby, M., Young, E., Pancake, J., Weekley, D., Rice, J., Primerano, D. A., Denvir, J., Horzempa, J., and Schmitt, D. M.',
      year: '2021',
      journal: 'Antibiotics',
      volume: '10(992)',
      pages: '1–10',
      doi: 'https://doi.org/10.3390/antibiotics10080992',
      pdf: '/antibiotics-10-00992.pdf'
    },
  ];

  const [visiblePdfs, setVisiblePdfs] = useState([]);

  const handleClick = (index, doi) => {
    if (isMobile) {
      window.open(doi, '_blank', 'noopener,noreferrer');
    } else {
      setVisiblePdfs((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    }
  };

  return (
    <div className='story-container'>
      <h1 className='publication'>Publications</h1>
      {publications.map((pub, index) => (
        <div key={index}>
          <div
            onClick={() => handleClick(index, pub.doi)}
            className='pdf-banner'
            style={{ cursor: 'pointer' }}
          >
            {visiblePdfs.includes(index) && !isMobile
              ? 'Click to Close'
              : (
                <span>
                  <strong>
                    {pub.authors} ({pub.year}), {pub.title}, {pub.journal}, {pub.volume}, {pub.pages} <br />
                    {pub.doi}
                  </strong>
                </span>
              )}
          </div>

          {/* Only show iframe on desktop and if visible */}
          {visiblePdfs.includes(index) && !isMobile && (
            <div style={{ marginTop: '20px' }}>
              <iframe
                src={pub.pdf}
                width="100%"
                height="600"
                style={{ border: 'none' }}
                title="PDF Viewer"
              ></iframe>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Publications;
