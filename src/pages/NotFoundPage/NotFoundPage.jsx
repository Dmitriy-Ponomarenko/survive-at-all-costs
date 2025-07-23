// src/pages/NotFoundPage/NotFoundPage.jsx

import React from 'react';
import styles from './NotFoundPage.module.css';
import '../../index.css';

export const NotFoundPage = () => {
  return (
    <section className={`${styles.notFoundSection}`}>
      <div className={`${styles.notFoundContainer}`}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </section>
  );
};
