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
        <p>What’s so special?</p>
        <h2>features</h2>
        <ul>
          <li>
            SURVIVE AT ALL COSTS
            <p>
              You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue
              chopper.
            </p>
          </li>
          <li>CREATE ALLIES AND ENEMIES</li>
          <li>IMPRESS THE AUDIENCE</li>
        </ul>
      </div>
    </section>
  );
};
