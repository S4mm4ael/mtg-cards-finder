import React from 'react';
import styles from './Home.module.css';

function About(): JSX.Element {
  return (
    <section id="about-section" className={styles.about__section}>
      <h1 className={styles.home__title}>MTG Card Finder</h1>
      <p className={styles.home__text}>
        Simply React Native app, that helps you to find Magic: The Gathering cards
      </p>
    </section>
  );
}
export default About;
