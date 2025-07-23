// src/components/LandingPageComp/FeaturesSection/FeaturesSection.jsx

import React from 'react';
import styles from './FeaturesSection.module.css';
import '../../../index.css';

export const FeaturesSection = () => {
  return (
    <section className={`${styles.featuresSection} section`}>
      <div className={`${styles.featuresContainer} container`}>
        <h2>Features</h2>
        <p>FeaturesSection text</p>
        {/* Additional features content can go here */}
      </div>
    </section>
  );
};
