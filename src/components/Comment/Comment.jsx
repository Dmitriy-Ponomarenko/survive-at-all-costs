import React from 'react';
import styles from './Comment.module.css';
import { FaTwitter } from 'react-icons/fa';

const Comment = ({ avatar, name, userType, text, date }) => {
  return (
    <div className={styles.commentCard}>
      <div className={styles.topSection}>
        <div className={styles.avatarWrapper}>
          <img src={avatar} alt={`${name} avatar`} className={styles.avatar} />
        </div>
        <div className={styles.userInfoWrapper}>
          <div className={styles.userName}>{name}</div>
          <div className={styles.userType}>{userType}</div>
        </div>
        <FaTwitter className={styles.twitterIcon} />
      </div>

      <div className={styles.commentText}>
        <p>{text}</p>
      </div>

      <div className={styles.commentDate}>{date}</div>
    </div>
  );
};

export default Comment;
