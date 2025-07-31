// src/components/LandingPageComp/FeaturesSection/FeaturesSection.jsx

import React, { useState } from 'react';
import styles from './FeaturesSection.module.css';
import '../../../index.css';
import { features } from './features';

export const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleOpenChange(index) {
    setActiveIndex(index);
  }
  return (
    <section className={`${styles.featuresSection} section`}>
      <div className={`${styles.featuresContainer} container`}>
        <div className={styles.title}>
          <p className={styles.sectionTitle}>What’s so special?</p>
          <h2 className={styles.sectionSubtitle}>Features</h2>
        </div>
        <ul className={styles.featuresList}>
          {features.map(({ title, description }, index) => (
            <li
              className={styles.featuresElement}
              key={index}
              onClick={() => handleOpenChange(index)}
            >
              <span
                className={`${styles.featuresElementMarker} ${activeIndex === index ? styles.active : ''}`}
              ></span>
              <div>
                <h3>{title}</h3>
                <p className={`${styles.featuresElementDesc} ${activeIndex === index ? styles.active : ''}`}>
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
