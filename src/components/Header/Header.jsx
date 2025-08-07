// src/components/Header/Header.jsx

import React from 'react';
import styles from './Header.module.css';
import '../../index.css';

export const Header = () => {
  return (
    <header id='main' className={`${styles.header} section`}>
      <div className={`${styles.headerContainer} container`}>
        <h1>Site Header</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
