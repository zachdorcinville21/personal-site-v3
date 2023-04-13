import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Carousel } from '@mantine/carousel';
import styled from 'styled-components';
import MentorIcon from '/public/assets/icons/mentor/mentor.svg';
import styles from './Mentor.module.sass';
import { carouselData } from './carouselData';

const slideCarousel = (selector: string, trigger: string) => {
    gsap.to(selector, {
        autoAlpha: 1,
        translateY: -50,
        scrollTrigger: { trigger: trigger },
        duration: 1,
    });
};

const Text = styled.div`
    font-weight: normal;
    color: #fffafa;
`;

const Mentor = () => {
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
        slideCarousel('#carousel-animate', '#carousel-animate');
    }, []);

    return (
        <div className={styles['mentor-container']}>
            <div className={styles['mentor-heading']}>
                <MentorIcon />
                <Text as="h1">Teaching / Mentoring</Text>
            </div>
            <div className={styles['carousel']} id="carousel-animate">
                <Carousel slideGap="md" withIndicators>
                    {slides}
                </Carousel>
            </div>
        </div>
    );
};

export default Mentor;
