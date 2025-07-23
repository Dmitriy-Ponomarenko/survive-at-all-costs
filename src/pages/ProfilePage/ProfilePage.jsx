// src/pages/ProfilePage/ProfilePage.jsx

import React from 'react';
import '../../index.css';
import styles from './ProfilePage.module.css';

export const ProfilePage = () => {
  return (
  <section className={`${styles.homeSection}`}>
      <div className={`${styles.homeContainer}`}>
        <Header />
        <HeroSection />
        <Features />
        <PricingSection />
        <StepsSection />
        <Testimonials />
        <ContactSection />
        <Footer />
      </div>
    </section>
  );
}
