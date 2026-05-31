import React, { useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import gsap, { Linear } from 'gsap';
import styled, { useTheme } from 'styled-components';
import styles from './Projects.module.sass';
import Image from 'next/image';

const Title = styled.h1<{ $textPrimary: string }>`
    font-weight: 700;
    color: ${(props) => props.$textPrimary};
    margin: 1rem 0 0;
    letter-spacing: -0.02em;
    text-align: center;
`;

const fadeInTitle = (selector: string) => {
    gsap.to(selector, {
        autoAlpha: 1,
        scrollTrigger: { trigger: selector },
        duration: 1,
    });
};

const ProjectsHeader = () => {
    const theme = useTheme();

    useEffect(() => {
        fadeInTitle('#proj-header-animate');
    }, []);

    return (
        <div className={styles['project-header']} id="proj-header-animate">
            <Controller>
                <Scene duration={500}>
                    {(progress?: number) => (
                        <Timeline
                            totalProgress={progress}
                            target={
                                <Image
                                    id="gear-svg"
                                    src="/assets/icons/projects/gear-gray.svg"
                                    width={50}
                                    height={50}
                                    alt="gear"
                                />
                            }
                        >
                            <Tween
                                to={{
                                    rotation: 360,
                                    ease: Linear.easeNone,
                                    scrollTrigger: {
                                        trigger: '#proj-header-animate',
                                        scrub: 0.2,
                                    },
                                }}
                            />
                        </Timeline>
                    )}
                </Scene>
            </Controller>

            <Title id="proj-title" $textPrimary={theme.pallete.textPrimary}>
                Some things I&apos;ve built
            </Title>
        </div>
    );
};

export default ProjectsHeader;
