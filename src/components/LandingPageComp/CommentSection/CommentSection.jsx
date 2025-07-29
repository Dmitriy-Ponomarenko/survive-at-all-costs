// src/components/LandingPageComp/CommentSection/CommentSection.jsx

import React from 'react';
import styles from './CommentSection.module.css';
import '../../../index.css';
import { Link } from 'react-router-dom';
export const CommentSection = () => {
  return (
    <section className={`${styles.commentSection} section`}>
      <div className={`${styles.commentContainer} container`}>
        <p>What people think?</p>
        <h2>Press quotes</h2>
        <p>
          Our goal is to create a product and service that you’re satisfied with
          and use it every day. This is why we’re constantly working on our
          services to make it better every day and really listen to what our
          users has to say.
        </p>
        <Link to="/comments" className={styles.commentButton}>
          Read more testimonials
        </Link>
      </div>
    </section>
  );
};
