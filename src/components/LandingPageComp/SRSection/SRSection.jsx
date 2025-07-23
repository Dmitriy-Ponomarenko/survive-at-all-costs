// src/components/LandingPageComp/SRSection/SRSection.jsx

import React from 'react';
import styles from './SRSection.module.css';
import '../../../index.css';

export const SRSection = () => {
  return (
    <section className={`${styles.srSection} section`}>
      <div className={`${styles.srContainer} container`}>
        <h2>SRSection Title</h2>
        <p>SRSection text</p>
        {/* Additional content can be added here */}
      </div>
    </section>
  );
};
