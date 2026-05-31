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
  const { reveal } = useAnimation();
  const { width } = useViewportSize();

  useEffect(() => {
    gsap.to('#welcome-copy', { autoAlpha: 1 });
    const splitText = new SplitType('#welcome-header', { types: 'chars' });
    const chars = splitText.chars;
    reveal(chars!);
    gsap.delayedCall(1.0, () =>
      gsap.to('#welcome-subheader', { autoAlpha: 1, duration: 0.5, ease: 'power1.out' })
    );
  }, []);

  return (
    <div className={styles['welcome-container']}>
      <div className={styles['welcome-shell']}>
        <WelcomeCopy id="welcome-copy">
          <WelcomeHeader id="welcome-header">
            Hi, I&apos;m Zachary.
          </WelcomeHeader>
          <WelcomeSubHeader id="welcome-subheader">
            I build scalable web and mobile products, with 5 years of
            professional engineering experience.
          </WelcomeSubHeader>
        </WelcomeCopy>
        {width >= 1190 && (
          <div className={styles['icon-frame']}>
            <DeskWorkIcon width={430} height={430} />
          </div>
        )}
      </div>
    </div>
  );
};

const WelcomeHeader = styled.h1`
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
  font-size: 4.2rem;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  margin: 0;

  @media (max-width: 992px) {
    font-size: 3.1rem;
  }

  @media (max-width: 576px) {
    font-size: 2.1rem;
  }
`;

const WelcomeSubHeader = styled.p`
  font-weight: 400;
  font-size: 1.35rem;
  line-height: 1.8;
  color: rgba(236, 239, 247, 0.85);
  opacity: 0;
  margin: 0;
  max-width: 730px;

  @media (max-width: 992px) {
    font-size: 1.2rem;
    line-height: 1.65;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const WelcomeCopy = styled(Col)`
  gap: 1.2rem;
  opacity: 0; /* to prevent flash of final state before animation */
`;

export default Welcome;
