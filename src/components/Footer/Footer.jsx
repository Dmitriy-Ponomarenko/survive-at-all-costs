// src/components/Footer/Footer.jsx

import React from 'react';
import styles from './Footer.module.css';
import '../../index.css';
import { FaFacebook, FaYoutube, FaTwitter, FaTwitch } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className={`${styles.footerSection} section`}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.footerContent}>
          <img
            src="/src/assets/Footer/logo1.svg"
            alt="Logo"
            className={styles.logoImg}
          />
          <nav>
            <ul className={styles.allSections}>
              <li>
                <a className={styles.anchorLink} href="#main">
                  MAIN
                </a>
              </li>
              <li>
                <a className={styles.anchorLink} href="#about">
                  about
                </a>
              </li>
              <li>
                <a className={styles.anchorLink} href="#feature">
                  game features
                </a>
              </li>
              <li>
                <a className={styles.anchorLink} href="#SRSection">
                  System requirements
                </a>
              </li>
              <li>
                {' '}
                <a className={styles.anchorLink} href="#">
                  quotes
                </a>
              </li>
            </ul>
          </nav>
          <ul className={styles.mediaSocials}>
            <li>
              <FaFacebook size={30} className={styles.mediaSocialIcon} />
            </li>
            <li>
              <FaTwitter size={30} className={styles.mediaSocialIcon} />
            </li>
            <li>
              <FaYoutube size={30} className={styles.mediaSocialIcon} />
            </li>
            <li>
              <FaTwitch size={30} className={styles.mediaSocialIcon} />
            </li>
          </ul>
        </div>
        <div className={styles.privacyPolicy}>
          <p className={styles.year}>&copy; 2025 SAAC. All rights reserved.</p>

          <ul className={styles.footerList}>
            <li>
              <a className={styles.footerElement} href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a className={styles.footerElement} href="/terms">Terms of Service</a>
            </li>
            <li>
              <a className={styles.footerElement}href="/terms">Code of Conduct</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
