import React, { useEffect } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import styles from './Welcome.module.sass';
import DeskWorkIcon from '/public/assets/icons/welcome/desk-work.svg';
import { Col } from '../common/Col';
import { useAnimation } from '@/util/hooks/useAnimation';
import SplitType from 'split-type';
import { useViewportSize } from '@mantine/hooks';

const Welcome = () => {
    const { fadeIn, reveal } = useAnimation();
    const { width } = useViewportSize();

    useEffect(() => {
        gsap.to('#welcome-copy', { autoAlpha: 1 });
        const splitText = new SplitType('#welcome-header', { types: 'chars' });
        const chars = splitText.chars;
        reveal(chars!);
        gsap.delayedCall(1.8, () => fadeIn('#welcome-subheader'));
    }, []);

    return (
        <div className={styles['welcome-container']}>
            {width >= 1190 && <DeskWorkIcon width={500} height={500} />}
            <WelcomeCopy id="welcome-copy">
                <WelcomeHeader id="welcome-header">
                    Welcome, I'm Zachary
                </WelcomeHeader>
                <WelcomeSubHeader id="welcome-subheader">
                    Web and mobile developer
                </WelcomeSubHeader>
            </WelcomeCopy>
        </div>
    );
};

const WelcomeHeader = styled.h1`
    font-weight: 400;
    font-size: 3.875rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    margin: 0;

    @media (max-width: 768px) {
        font-size: 2.875rem;
    }

    @media (max-width: 576px) {
        font-size: 1.875rem;
    }
`;

const WelcomeSubHeader = styled.h3`
    font-weight: 400;
    font-size: 2rem;
    opacity: 0;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 576px) {
        font-size: 1.2rem;
    }
`;

const WelcomeCopy = styled(Col)`
    gap: 2rem;
    opacity: 0; /* to prevent flash of final state before animation */
`;

export default Welcome;
