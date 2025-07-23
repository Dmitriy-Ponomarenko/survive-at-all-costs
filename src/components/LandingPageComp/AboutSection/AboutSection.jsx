// src/components/LandingPageComp/AboutSection/AboutSection.jsx

import React from 'react';
import styles from './AboutSection.module.css';
import '../../../index.css';

export const AboutSection = () => {
  return (
    <section className={`${styles.aboutSection} section`}>
      <div className={`${styles.aboutContainer} container`}>
        <h2>About Us</h2>
        <p>AboutSection text</p>
      </div>
    </section>
  );
};
