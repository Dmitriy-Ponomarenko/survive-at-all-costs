// src/components/LandingPageComp/AboutSection/AboutSection.jsx

import React from 'react';
import styles from './AboutSection.module.css';
import '../../../index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { defaultSwiperConfig } from '../../../utils/defaultSwiperConfig';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    alt: 'Island overview',
    desktop: '/src/assets/aboutSection/pc/about1.jpg',
    desktop2x: '/src/assets/aboutSection/pc/about1@2x.jpg',
    mobile: '/src/assets/aboutSection/mobile/about-mobile1.jpg',
    mobile2x: '/src/assets/aboutSection/mobile/about-mobile1@2x.jpg',
  },
  {
    alt: 'Monsters encounter',
    desktop: '/src/assets/aboutSection/pc/about2.jpg',
    desktop2x: '/src/assets/aboutSection/pc/about2@2x.jpg',
    mobile: '/src/assets/aboutSection/mobile/about-mobile2.jpg',
    mobile2x: '/src/assets/aboutSection/mobile/about-mobile2@2x.jpg',
  },
  {
    alt: 'Contestants escaping',
    desktop: '/src/assets/aboutSection/pc/about3.jpg',
    desktop2x: '/src/assets/aboutSection/pc/about3@2x.jpg',
    mobile: '/src/assets/aboutSection/mobile/about-mobile3.jpg',
    mobile2x: '/src/assets/aboutSection/mobile/about-mobile3@2x.jpg',
  },
  {
    alt: 'Final escape',
    desktop: '/src/assets/aboutSection/pc/about4.jpg',
    desktop2x: '/src/assets/aboutSection/pc/about4@2x.jpg',
    mobile: '/src/assets/aboutSection/mobile/about-mobile4.jpg',
    mobile2x: '/src/assets/aboutSection/mobile/about-mobile4@2x.jpg',
  },
];

export const AboutSection = () => {
  return (
    <section className={`${styles.aboutSection} section`}>
      <div className={`${styles.aboutContainer} container`}>
        <div className={styles.aboutFirstContainer}>
          <div className={styles.aboutTitleWrapper}>
            <p className={styles.aboutSubtitle}>What is SOS?</p>
            <h2 className={styles.aboutTitle}>social battle royale game</h2>
          </div>
          <p className={styles.aboutText}>
            Each round, you and 15 other contestants compete to escape a deadly island filled with monsters. The trick
            is: three people can survive. Will you run solo or form friendships with others to escape? Making the right
            decisions could be the difference between life and death.
          </p>
        </div>
        <div className={styles.aboutSwiperContainer}>
          <Swiper {...defaultSwiperConfig} modules={[Navigation, Pagination]}>
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <picture>
                  <source srcSet={`${slide.desktop} 1x, ${slide.desktop2x} 2x`} media="(min-width: 768px)" />
                  <source srcSet={`${slide.mobile} 1x, ${slide.mobile2x} 2x`} media="(max-width: 767px)" />
                  <img src={slide.desktop} alt={slide.alt} className={styles.swiperImage} />
                </picture>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
