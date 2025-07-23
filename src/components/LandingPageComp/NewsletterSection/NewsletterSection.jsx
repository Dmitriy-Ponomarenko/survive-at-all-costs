// src/components/LandingPageComp/NewsletterSection/NewsletterSection.jsx

import React from 'react';
import styles from './NewsletterSection.module.css';
import '../../../index.css';

export const NewsletterSection = () => {
  return (
    <section className={`${styles.newsletterSection} section`}>
      <div className={`${styles.newsletterContainer} container`}>
        <h2>Subscribe to our Newsletter</h2>
        <form className={`${styles.newsletterForm}`}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};
