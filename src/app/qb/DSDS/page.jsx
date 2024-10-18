import React from 'react';

const DSDS = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  };

  return (
    <div>
      <div style={{ ...containerStyle }}>
        <h1 className="middleTitle">DSDS/DSGT QB</h1>
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
          src="https://docs.google.com/document/d/e/2PACX-1vQeuQLLS5WyU2vUnK8_xGiQM1PCIw1wmUOhb0nKJzfZiXtLurHSNzkeCANE8FawsA/pub?embedded=true"
          frameBorder="0"
          style={{ maxWidth: '830px', height: '1200px', width: '100%', display: 'block' }} // Adjust height as needed
          title="DSA Document"
        />
      </div>
    </div>
  );
};

export default DSDS;
