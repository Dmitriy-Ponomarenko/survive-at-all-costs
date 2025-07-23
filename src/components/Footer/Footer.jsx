// src/components/Footer/Footer.jsx

import React from 'react';
import styles from './Footer.module.css';
import '../../index.css';

export const Footer = () => {
  return (
    <footer className={`${styles.footerSection} section`}>
      <div className={`${styles.footerContainer} container`}>
        <p>&copy; 2025 SAAC. All rights reserved.</p>
        <nav>
          <ul className={styles.footerNav}>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
