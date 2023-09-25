import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Project from '../Project/Project';
import ProjectsHeader from './ProjectsHeader';
import styled from 'styled-components';
import styles from './Projects.module.sass';

gsap.registerPlugin(ScrollTrigger);

const showProjects = (selector: string) => {
    ScrollTrigger.batch(selector, {
        interval: 1,
        onEnter: (batch) =>
            gsap.to(batch, {
                autoAlpha: 1,
                stagger: { each: 0.3 },
                scrollTrigger: { trigger: '#proj-cards' },
                duration: 1,
            }),
    });
};

const animateTitle = (selector: string) => {
    gsap.to(selector, {
        autoAlpha: 1,
        scrollTrigger: { trigger: '#proj-container' },
        duration: 1,
    });
};

const AppStoreLink = styled.div`
    color: steelblue;
    text-decoration: none;
    &:hover {
        cursor: pointer;
    }
`;

const Projects = () => {
    useEffect(() => {
        animateTitle('#proj-title');
        showProjects('.proj-animate');
    }, []);

    return (
        <div className={styles['projects-container']} id="proj-container">
            <ProjectsHeader />
            <div className={styles['project-cards']} id="proj-cards">
                <div className={`${styles.project} proj-animate`}>
                    <Project
                        imgLink="https://sticnuru.sirv.com/go-native-images/roberto-nickson-_em5tYXuOQc-unsplash.jpg"
                        title="Gotham Oracle"
                        description={
                            <div>
                                A digital guide for NYC experiences. Also
                                available on the{' '}
                                <AppStoreLink
                                    onClick={() =>
                                        window.open(
                                            'https://apps.apple.com/us/app/gotham-oracle/id1617227132',
                                            '_blank'
                                        )
                                    }
                                    rel="no-referrer"
                                >
                                    App Store.
                                </AppStoreLink>
                            </div>
                        }
                        projLink="https://gothamoracle.com"
                    />
                </div>
                <div className={`${styles.project} proj-animate`}>
                    <Project
                        imgLink="https://sticnuru.sirv.com/Website%20images/fluid.jpg"
                        title="Fluidity"
                        description="A tool that makes your HTML and CSS respsonsive for mobile, tablet, and desktop."
                        projLink="https://www.fluidity.dev/"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
