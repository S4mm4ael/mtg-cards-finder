import React from 'react';
import styles from './Home.module.css';
import img from '../../assets/img/home.png';
import { Link } from 'react-router-dom';

function About(): JSX.Element {
  return (
    <section id="about-section" className={styles.about__section}>
      <h1 className={styles.home__title}>MTG Card Finder</h1>
      <div className={styles.home__image}>
        <img src={img} alt="cards image" />
      </div>
      <p className={styles.home__text}>
        Simply React Native app, that helps you to find Magic: The Gathering cards
      </p>
      <Link id="main-page" to="/cards" className={styles.home__button}>
        Try it
      </Link>
    </section>
  );
}
export default About;
