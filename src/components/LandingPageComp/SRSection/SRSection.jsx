// src/components/LandingPageComp/SRSection/SRSection.jsx

import React from 'react';
import styles from './SRSection.module.css';
import '../../../index.css';

export const SRSection = () => {
  return (
    <section className={`${styles.srSection} section`}>
      <div className={`${styles.srContainer} container`}>
        <p>Can My Computer Run this game?</p>
        <h2>system requirements</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <span>OS:</span> Windows 7 64-bit only (No OSX support at this time)
              </td>
              <td>
                <span>PROCESSOR:</span> Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ
              </td>
              <td>
                <span>MEMORY:</span> 8 GB RAM
              </td>
              <td>
                <span>STORAGE:</span> 8 GB available space
              </td>
              <td>
                <span>GRAPHICS:</span> NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
