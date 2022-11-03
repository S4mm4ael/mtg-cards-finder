import React from 'react';
import styles from '../Card/Card.module.css';
import { Card } from 'components/Card/Card';
import { cardArray } from 'components/Card/cardData';

function Result() {
  return (
    <section className={styles.card__section}>
      {cardArray.map((item) => (
        <Card key={item.name} {...item} />
      ))}
    </section>
  );
}

export default Result;
