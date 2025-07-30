// src/components/LandingPageComp/AboutSection/AboutSection.jsx

import React from 'react';
import styles from './AboutSection.module.css';
import '../../../index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { defaultSwiperConfig } from '../../../utils/swiperConfig';
import { defaultSwiperAutoplay } from '../../../utils/swiperAutoplay';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import About1 from '../../../assets/aboutSection/pc/about1.jpg';
import About1x2 from '../../../assets/aboutSection/pc/about1@2x.jpg';
import About2 from '../../../assets/aboutSection/pc/about2.jpg';
import About2x2 from '../../../assets/aboutSection/pc/about2@2x.jpg';
import About3 from '../../../assets/aboutSection/pc/about3.jpg';
import About3x2 from '../../../assets/aboutSection/pc/about3@2x.jpg';
import About4 from '../../../assets/aboutSection/pc/about4.jpg';
import About4x2 from '../../../assets/aboutSection/pc/about4@2x.jpg';

import AboutMobile1 from '../../../assets/aboutSection/mobile/about-mobile1.jpg';
import AboutMobile1x2 from '../../../assets/aboutSection/mobile/about-mobile1@2x.jpg';
import AboutMobile2 from '../../../assets/aboutSection/mobile/about-mobile2.jpg';
import AboutMobile2x2 from '../../../assets/aboutSection/mobile/about-mobile2@2x.jpg';
import AboutMobile3 from '../../../assets/aboutSection/mobile/about-mobile3.jpg';
import AboutMobile3x2 from '../../../assets/aboutSection/mobile/about-mobile3@2x.jpg';
import AboutMobile4 from '../../../assets/aboutSection/mobile/about-mobile4.jpg';
import AboutMobile4x2 from '../../../assets/aboutSection/mobile/about-mobile4@2x.jpg';

const slides = [
  {
    alt: 'Island overview',
    desktop: About1,
    desktop2x: About1x2,
    mobile: AboutMobile1,
    mobile2x: AboutMobile1x2,
  },
  {
    alt: 'Monsters encounter',
    desktop: About2,
    desktop2x: About2x2,
    mobile: AboutMobile2,
    mobile2x: AboutMobile2x2,
  },
  {
    alt: 'Contestants escaping',
    desktop: About3,
    desktop2x: About3x2,
    mobile: AboutMobile3,
    mobile2x: AboutMobile3x2,
  },
  {
    alt: 'Final escape',
    desktop: About4,
    desktop2x: About4x2,
    mobile: AboutMobile4,
    mobile2x: AboutMobile4x2,
  },
];

export const AboutSection = () => {
  return (
    <section className={`${styles.aboutSection} section`}>
      <div className={`${styles.aboutContainer} container`}>
        <div className={styles.aboutFirstContainer}>
          <p className={styles.aboutSubtitle}>What is SOS?</p>
          <h2 className={styles.aboutTitle}>social battle royale game</h2>
          <div className={styles.aboutLine}></div>
          <div className={styles.aboutTextContainer}>
            <p className={styles.aboutText}>
              Each round, you and 15 other contestants compete to escape a
              deadly island filled with monsters. The trick is: three people can
              survive. Will you run solo or form friendships with others to
              escape?
            </p>
            <p className={styles.aboutText}>
              Making the right decisions could be the difference between{' '}
              <span className={styles.aboutTextHighlight}>life and death.</span>
            </p>
          </div>
        </div>
        <div className={styles.aboutSwiperContainer}>
          <Swiper
            {...defaultSwiperConfig}
            autoplay={defaultSwiperAutoplay}
            modules={[Navigation, Pagination, Autoplay]}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <picture>
                  <source
                    srcSet={`${slide.desktop} 1x, ${slide.desktop2x} 2x`}
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet={`${slide.mobile} 1x, ${slide.mobile2x} 2x`}
                    media="(max-width: 767px)"
                  />
                  <img
                    src={slide.desktop}
                    alt={slide.alt}
                    className={styles.swiperImage}
                  />
                </picture>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
