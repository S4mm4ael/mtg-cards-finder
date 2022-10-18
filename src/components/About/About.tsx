import React from 'react';
import styles from './About.module.css';

function About(): JSX.Element {
  return (
    <section id="about-section" className={styles.about__section}>
      <h3>Hi! My name is Semion</h3>
      <p> I am new to React, this is my first study project</p>
    </section>
  );
}
export default About;
