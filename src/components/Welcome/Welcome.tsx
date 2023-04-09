import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import styles from './Welcome.module.sass';
import DoubleDown from '/public/assets/icons/welcome/two-down.svg';

const Text = styled.div`
    font-weight: normal;
    color: #FFFAFA;
`;

const fadeInTitle = () => {
    gsap.to('.welcome-txt-animate', { autoAlpha: 1, duration: 2, });
}

const slideProfession = () => {
    gsap.to('.profession-animate', { autoAlpha: 1, x: 50, duration: 1, });
}

const Welcome = () => {
    const [projectsY, setProjectsY] = useState(0);

    useEffect(() => {
        console.log(document.getElementById('welcome-txt'));
        gsap.delayedCall(0.5, fadeInTitle);
        gsap.delayedCall(1.5, slideProfession);
        setProjectsY(
            document.querySelector('.projects-container')?.getBoundingClientRect()?.y ?? 0
        );
    }, []);

    return (
        <div className={styles['welcome-container']}>
            <div className={styles.greeting}>
                <Text id={styles['welcome-txt']} className='welcome-txt-animate' as="h1">Welcome, I'm Zachary</Text>
                <Text id={styles.profession} className='profession-animate' as="p">Software Engineer | Web Developer</Text>
            </div>
            <div className={styles['see-more']} onClick={() => scroll.scrollTo(projectsY ?? 900)}>
                <Text as="p">See more</Text>
                <DoubleDown width={100} height={100} />
            </div>
        </div>
    );
}



export default Welcome;
