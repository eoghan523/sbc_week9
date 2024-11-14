// src/CssModule.jsx
import React from 'react';
import styles from './CssModule.module.css';

const CssModule = () => {
  return <div className={styles.moduleStyle}>This is styled using CSS Modules</div>;
};

export default CssModule;
