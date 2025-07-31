import React from 'react';
import styles from './CommentSection.module.css';
import '../../../index.css';
import { Link } from 'react-router-dom';
import Comment from '../../Comment/Comment';

export const CommentSection = () => {
  const comments = [
    {
      avatar: '/images/user1.jpg',
      name: 'Evan Lahti',
      userType: 'PC Gamer',
      text: '“One of my gaming highlights of the year.”',
      date: 'October 18, 2025',
    },
    {
      avatar: '/images/user2.jpg',
      name: 'Jada Griffin',
      userType: 'Nerdreactor',
      text: '“The next big thing in the world of streaming and survival games.”',
      date: 'December 21, 2025',
    },
    {
      avatar: '/images/user3.jpg',
      name: 'Aaron Williams',
      userType: 'Uproxx',
      text: '“Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.”',
      date: 'December 24, 2025',
    },
  ];

  return (
    <section className={`${styles.commentSection} section`}>
      <div className={`${styles.commentContainer} container`}>
        <p>What people think?</p>
        <h2>Press quotes</h2>
        <p>
          Our goal is to create a product and service that you’re satisfied with
          and use it every day. This is why we’re constantly working on our
          services to make it better every day and really listen to what our
          users have to say.
        </p>

        <div className={styles.commentsWrapper}>
          {comments.map((comment, index) => (
            <Comment
              key={index}
              avatar={comment.avatar}
              name={comment.name}
              userType={comment.userType}
              text={comment.text}
              date={comment.date}
            />
          ))}
        </div>

        <Link to="/comments" className={styles.commentButton}>
          Read more testimonials
        </Link>
      </div>
    </section>
  );
};
