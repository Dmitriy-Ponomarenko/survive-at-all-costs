// src/components/LandingPageComp/NewsletterSection/NewsletterSection.jsx

import React from 'react';
import styles from './NewsletterSection.module.css';
import '../../../index.css';

export const NewsletterSection = () => {
  return (
    <section className={`${styles.newsletterSection} section`}>
      <div className={`${styles.newsletterContainer} container`}>
        <p className={styles.newsletterSubtitle}>Want to stay in touch?</p>
        <h2 className={styles.newsletterTitle}>newsletter subscribe</h2>
        <p className={styles.newsletterText}>
          In order to start receiving our news, all you have to do is enter your
          email address. Everything else will be taken care of by us. We will
          send you emails containing information about game. We don’t spam.
        </p>
        <form className={`${styles.newsletterForm}`}>
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe now</button>
        </form>
      </div>
    </section>
  );
};
