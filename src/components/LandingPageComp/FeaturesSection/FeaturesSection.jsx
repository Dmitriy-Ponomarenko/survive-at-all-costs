// src/components/LandingPageComp/FeaturesSection/FeaturesSection.jsx

import React from 'react';
import styles from './FeaturesSection.module.css';
import '../../../index.css';

export const FeaturesSection = () => {
  return (
    <section className={`${styles.featuresSection} section`}>
      <div className={`${styles.featuresContainer} container`}>
        <div className={styles.title}>
          <p className={styles.sectionTitle}>What’s so special?</p>
        <h2 className={styles.sectionSubtitle}>Features</h2>
        </div>
        <ul className={styles.featuresList}>
          <li className={styles.featuresElement}>
            <span className={styles.featuresElementMarker}></span>
            <div>
              <h3 className={styles.featuresElementTitle}>SURVIVE AT ALL COSTS</h3>
              <p className={styles.featuresElementDesc}>
                You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue
                chopper.
              </p>
            </div>
          </li>
          <li className={styles.featuresElement}>
            <span className={styles.featuresElementMarker}></span>
            <div>
              <h3 className={styles.featuresElementTitle}>CREATE ALLIES AND ENEMIES</h3>
              <p className={styles.featuresElementDesc}>
                Forge alliances and make enemies — every choice shapes your survival.
              </p>
            </div>
          </li>
          <li className={styles.featuresElement}>
            <span className={styles.featuresElementMarker}></span>
            <div>
              <h3 className={styles.featuresElementTitle}>IMPRESS THE AUDIENCE</h3>
              <p className={styles.featuresElementDesc}>
                Show charisma and bold moves; win attention to unlock new opportunities or face risks.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
