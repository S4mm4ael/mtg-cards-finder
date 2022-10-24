import React from 'react';
import styles from './Card.module.css';
import '../../index.css';
import { Card } from './ICard';

export function Card({ id, name, types, incollection, colors, date, imageUrl }: Card): JSX.Element {
  return (
    <div id={`card-${id + 1}`} className={styles.card}>
      <h5 className={styles.card__title}>{name}</h5>
      <img className={styles.card__img} width={200} src={imageUrl} alt={name} />
      <span className={styles.card__header}>Colors:</span>
      <div className={styles.color__wrapper}>
        {colors.map((color: string) => (
          <div
            style={{ backgroundColor: `${color}` }}
            key={color}
            className={styles.card__color}
          ></div>
        ))}
      </div>

      <span className={styles.card__header}>Type(s):</span>
      {types.map((type: string) => (
        <b key={type}>{type}</b>
      ))}
      <span className={styles.card__header}>FAQ:</span>
      <b> {date} </b>
      <span className={styles.card__header}>Availability:</span>
      <div className="row">
        {incollection === false ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-check"></i>
        )}
      </div>
    </div>
  );
}
