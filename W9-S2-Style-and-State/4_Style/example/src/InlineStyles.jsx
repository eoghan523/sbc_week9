// src/InlineStyles.jsx
import React from 'react';

const InlineStyles = () => {
  const inlineStyle = {
    backgroundColor: 'lightblue',
    padding: '10px',
    borderRadius: '5px',
    color: 'darkblue',
  };

  return <div style={inlineStyle}>This is styled using Inline Styles</div>;
};

export default InlineStyles;
