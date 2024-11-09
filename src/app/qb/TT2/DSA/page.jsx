import React from 'react';

const Dsa = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  };

  return (
    <div>
      <div style={{ ...containerStyle }}>
        <h1 className="middleTitle">DS/DSA QB TT2</h1>
      </div>
      <div style={containerStyle}>
        <h3>For AI-DS & Comps Department</h3>
      </div>
      <div style={{ ...containerStyle, textAlign: 'center', fontSize: '16px', fontFamily: 'monospace' }}>
        <p>
          ⚠️ I&apos;ve solved these questions, but no guarantee of accuracy or marks. Review carefully and verify with other sources!
        </p>
      </div>
      <div style={containerStyle}>
      <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vT6dECLWqgiMNdyms2rsymV4ua5eNIhxQEtWSc7vt4vYLY5KrKR1UtnbOz6Xu1OLwRSkJZibB6DEKwM/pub?embedded=true"
          frameBorder="0"
          style={{ maxWidth: '830px', height: '1200px', width: '100%', display: 'block' }} // Adjust height as needed
          title="DSA Document"
        />
      </div>
    </div>
  );
};

export default Dsa;
