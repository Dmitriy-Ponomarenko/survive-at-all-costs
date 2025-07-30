// src/components/LandingPageComp/HeroSection/HeroSection.jsx

import React from 'react';
import styles from './HeroSection.module.css';
import '../../../index.css';

export const HeroSection = () => {
  return (
    <section className={`${styles.heroSection} section`}>
      <div className={`${styles.heroContainer} container`}>
        <h1>SURVIVE AT ALL COSTS</h1>
        <p>Experience new social battle royale game</p>
      </div>
    </section>
  );
};
