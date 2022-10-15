import React from 'react';
import styles from './Card.module.css';
import { cardArray } from './cardData';

export function Card({ id }: { id: number }): JSX.Element {
  return (
    <div id={`card-${id + 1}`} className={styles.card}>
      <h5 className={styles.card__title}>{cardArray[id].title}</h5>
      <img
        className={styles.card__img}
        width={200}
        height={200}
        src={cardArray[id].imageUrl}
        alt={cardArray[id].title}
      />

      <span className={styles.card__faction}>Faction:</span>
      <b>{cardArray[id].faction}</b>
      <div>
        <div>
          <span className={styles.card__price}>Price:</span>
          <b> ${cardArray[id].price} </b>
        </div>
      </div>
    </div>
  );
}
