import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Carousel } from '@mantine/carousel';
import styled, { useTheme } from 'styled-components';
import MentorIcon from '/public/assets/icons/mentor/mentor.svg';
import styles from './Mentor.module.sass';
import { carouselData } from './carouselData';

gsap.registerPlugin(ScrollTrigger);

const Mentor = () => {
  const theme = useTheme();

  const slides = carouselData.map((item, i) => (
    <Carousel.Slide key={i}>
      <img
        src={item.image}
        alt="carousel image"
        className={styles['carousel-img']}
      />
    </Carousel.Slide>
  ));

  useEffect(() => {
    gsap.fromTo(
      '#mentor-heading',
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: { trigger: '#mentor-container', once: true },
      }
    );
    gsap.fromTo(
      '#carousel-animate',
      { autoAlpha: 0, y: 20 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: '#carousel-animate', once: true },
      }
    );
  }, []);

  return (
    <div className={styles['mentor-container']} id="mentor-container">
      <div className={styles['mentor-header']} id="mentor-heading">
        <MentorIcon width={50} height={50} />
        <SectionTitle $textPrimary={theme.pallete.textPrimary}>
          Teaching &amp; Mentoring
        </SectionTitle>
      </div>
      <div className={styles['carousel']} id="carousel-animate">
        <Carousel slideGap="md" withIndicators>
          {slides}
        </Carousel>
      </div>
    </div>
  );
};

const SectionTitle = styled.h1<{ $textPrimary: string }>`
  font-weight: 700;
  color: ${(props) => props.$textPrimary};
  margin: 0;
  letter-spacing: -0.02em;
  text-align: center;
`;

export default Mentor;
