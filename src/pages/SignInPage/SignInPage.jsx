// src/pages/SignInPage/SignInPage.jsx

import React from 'react';
import styles from './SignInPage.module.css';
import '../../index.css';

export const SignInPage = () => {
  return (
    <section className={`${styles.signInSection}`}>
      <div className={`${styles.signInContainer}`}>
        <h1>Sign In</h1>
        {/* Sign In form goes here */}
      </div>
    </section>
  );
};
