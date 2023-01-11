import React from 'react';
import styles from './About.module.css';
import github from '../../assets/img/github.png';

function About(): JSX.Element {
  return (
    <section id="about-section" className={styles.about__section}>
      <h3>Hi! My name is Semion</h3>
      <p> I am new to React, this is my first study project</p>
      <p className={styles.github}>
        <a href="https://github.com/S4mm4ael">
          <img src={github} alt="react" height={200} />
        </a>
      </p>
      <p>
        {' '}
        Project works using{' '}
        <a className={styles.api__link} href="https://magicthegathering.io/">
          MTG API
        </a>
      </p>
      <p>
        <a href="https://github.com/S4mm4ael/mtg-cards-finder">Source code</a>
      </p>
    </section>
  );
}
export default About;
