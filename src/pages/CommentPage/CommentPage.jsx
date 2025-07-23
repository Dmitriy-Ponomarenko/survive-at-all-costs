// src/pages/CommentPage/CommentPage.jsx

import React from 'react';
import styles from './CommentPage.module.css';
import '../../index.css';

export const CommentPage = () => {
  return (
    <section className={`${styles.commentSection}`}>
      <div className={`${styles.commentContainer}`}>
        <h1>Comments</h1>
        {/* Comment form and list goes here */}
      </div>
    </section>
  );
};
