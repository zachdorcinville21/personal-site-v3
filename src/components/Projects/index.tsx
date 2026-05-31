import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Project from '../Project/Project';
import ProjectsHeader from './ProjectsHeader';
import styles from './Projects.module.sass';

gsap.registerPlugin(ScrollTrigger);

const showProjects = (selector: string) => {
  ScrollTrigger.batch(selector, {
    interval: 0.3,
    once: true,
    onEnter: (batch) =>
      gsap.fromTo(
        batch,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.inOut',
        }
      ),
  });
};

const animateTitle = (selector: string) => {
  gsap.to(selector, {
    autoAlpha: 1,
    scrollTrigger: { trigger: '#proj-container' },
    duration: 1,
  });
};

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
            imgLink="https://sticnuru.sirv.com/Website%20images/arnold-francisca-f77Bh3inUpE-unsplash.jpg"
            title="ProFrontend"
            description="A platform for engineers to practice React coding exercises directly in the browser."
            projLink="https://profrontend.dev"
          />
        </div>
        <div className={`${styles.project} proj-animate`}>
          <Project
            imgLink="https://sticnuru.sirv.com/go-native-images/roberto-nickson-_em5tYXuOQc-unsplash.jpg"
            title="Gotham Oracle"
            description='A digital guide for NYC experiences.'
            projLink="https://apps.apple.com/us/app/gotham-oracle/id1617227132"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
