// src/pages/NotFoundPage/NotFoundPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.css';
import '../../index.css';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.notFoundSection}>
      <div className={styles.notFoundContainer}>
        <h1>Sorry, the page you are looking for does not exist.</h1>
        <button className={styles.notFoundButton} onClick={() => navigate('/')}>
          Go to Main Page
        </button>
      </div>
    </section>
  );
};
