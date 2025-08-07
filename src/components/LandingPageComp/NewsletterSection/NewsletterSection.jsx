// src/components/LandingPageComp/NewsletterSection/NewsletterSection.jsx

import React, { useState } from 'react';
import styles from './NewsletterSection.module.css';
import '../../../index.css';

export const NewsletterSection = () => {
  const [value, setValue] = useState('');


  function handleSubmit(e) {
    e.preventDefault()
    console.log(value)
    setValue('')
  }
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
      </div>
      <form className={`${styles.newsletterForm}`} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="email"
            id="email"
            value={value}
            onChange={e => setValue(e.target.value)}
            required
            className={value ? styles.filled : ''}
          />
          <label htmlFor="email">Your email address</label>
        </div>
        <button type="submit">Subscribe now</button>
      </form>
    </section>
  );
};
