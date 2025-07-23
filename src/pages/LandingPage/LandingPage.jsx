// src/pages/LandingPage/LandingPage.jsx

import React from 'react';
import styles from './LandingPage.module.css';
import '../../index.css';
import { Header } from '../../components/Header/Header';
import { HeroSection } from '../../components/LandingPageComp/HeroSection/HeroSection';
import { AboutSection } from '../../components/LandingPageComp/AboutSection/AboutSection';
import { FeaturesSection } from '../../components/LandingPageComp/FeaturesSection/FeaturesSection';
import { SRSection } from '../../components/LandingPageComp/SRSection/SRSection.jsx';
import { CommentSection } from '../../components/LandingPageComp/CommentSection/CommentSection';
import { NewsletterSection } from '../../components/LandingPageComp/NewsletterSection/NewsletterSection';
import { Footer } from '../../components/Footer/Footer';

export const LandingPage = () => {
  return (
    <section className={`${styles.homeSection}`}>
      <div className={`${styles.homeContainer}`}>
        <Header />
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <SRSection />
        <CommentSection />
        <NewsletterSection />
        <Footer />
      </div>
    </section>
  );
};
