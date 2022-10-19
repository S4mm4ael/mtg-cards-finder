import React from 'react';
import styles from './Card.module.css';
import '../../index.css';
import { cardArray } from './cardData';

export function Card({ id }: { id: number }): JSX.Element {
  return (
    <div id={`card-${id + 1}`} className={styles.card}>
      <h5 className={styles.card__title}>{cardArray[id].name}</h5>
      <img
        className={styles.card__img}
        width={200}
        src={cardArray[id].imageUrl}
        alt={cardArray[id].name}
      />

      <span className={styles.card__header}>Colors:</span>
      <div className={styles.color__wrapper}>
        {cardArray[id].colors.map((color) => (
          <div
            style={{ backgroundColor: `${color}` }}
            key={color}
            className={styles.card__color}
          ></div>
        ))}
      </div>

      <span className={styles.card__header}>Type(s):</span>
      {cardArray[id].types.map((type) => (
        <b key={type}>{type}</b>
      ))}
      <span className={styles.card__header}>FAQ:</span>
      <b> {cardArray[id].date} </b>
      <span className={styles.card__header}>Availability:</span>
      <div className="row">
        {cardArray[id].incollection === false ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-check"></i>
        )}
      </div>
    </div>
  );
}
