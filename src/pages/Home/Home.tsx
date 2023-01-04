import React from 'react';
import styles from './Home.module.css';
import github from '../../assets/img/github.png';

function About(): JSX.Element {
  return (
    <section id="about-section" className={styles.about__section}>
      <h1>MTG Card Finder</h1>
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
    </section>
  );
}
export default About;
