import React from 'react';

const DSDS = () => {
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <iframe
        src="https://drive.google.com/file/d/1XkQhlM62zmbS456qtG0z58bUPAvUUd99/preview" // Embed URL
        style={{
          width: '100%',
          height: 'calc(100vh - 100px)', // Adjust height as needed
          border: 'none', // No border for a cleaner look
          borderRadius: '10px',
          boxSizing: 'border-box',
        }}
        title="Embedded PDF"
      />
    </div>
  );
};

export default DSDS;
