// src/pages/SignUp/SignUpPage.jsx

import React from 'react';
import styles from './SignUpPage.module.css';
import '../../index.css';

export const SignUpPage = () => {
  return (
    <section className={`${styles.signUpSection}`}>
      <div className={`${styles.signUpContainer}`}>
        <h1>Sign Up</h1>
        {/* Sign Up form goes here */}
      </div>
    </section>
  );
};
