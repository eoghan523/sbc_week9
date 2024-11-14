// src/App.jsx
import React from 'react';
import './App.css';
import InlineStyles from './InlineStyles';
import Stylesheet from './Stylesheet';
import CssModule from './CssModule';
import StyledComponent from './StyledComponent';

function App() {
  return (
    <div className="App">
      <h1>React Styling Demonstration</h1>
      <InlineStyles />
      <Stylesheet />
      <CssModule />
      <StyledComponent />
    </div>
  );
}

export default App;
