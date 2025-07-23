// src/components/LandingPageComp/CommentSection/CommentSection.jsx

import React from 'react';
import styles from './CommentSection.module.css';
import '../../../index.css';

export const CommentSection = () => {
  return (
    <section className={`${styles.commentSection} section`}>
      <div className={`${styles.commentContainer} container`}>
        <h2>Comments</h2>
        {/* Comment form and list goes here */}
      </div>
    </section>
  );
};
