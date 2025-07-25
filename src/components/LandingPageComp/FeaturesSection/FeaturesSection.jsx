// src/components/LandingPageComp/FeaturesSection/FeaturesSection.jsx

import React from 'react';
import styles from './FeaturesSection.module.css';
import '../../../index.css';

export const FeaturesSection = () => {
  return (
    <section className={`${styles.featuresSection} section`}>
      <div className={`${styles.featuresContainer} container`}>
        <p>What’s so special?</p>
        <h2>Features</h2>
        <ul>
          <li>
            <h3>SURVIVE AT ALL COSTS</h3>
            <p>
              You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue
              chopper.
            </p>
          </li>
          <li>
            <h3>CREATE ALLIES AND ENEMIES</h3>
            <p>Forge alliances and make enemies — every choice shapes your survival.</p>
          </li>
          <li>
            <h3>IMPRESS THE AUDIENCE</h3>
            <p>Show charisma and bold moves; win attention to unlock new opportunities or face risks.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
