import React from 'react';
import styles from './Card.module.css';
import '../../index.css';
import { ICard } from './ICard';

export function Card({ id, name, types, colors, imageUrl, image }: ICard): JSX.Element {
  return (
    <div
      id={`card-${id}`}
      style={{ background: `linear-gradient(180deg, #ffffff 0%, ${colors} 120%)` }}
      className={`${styles.card}`}
    >
      <h5 className={styles.card__title}>{name}</h5>
      <img
        className={styles.card__img}
        width={200}
        src={`${image ? URL.createObjectURL(image) : imageUrl}`}
        alt={name}
      />
      <span className={styles.card__header}>Colors:</span>
      <div className={styles.color__wrapper}>
        {colors?.map((color: string) => (
          <div
            style={{ backgroundColor: `${color}` }}
            key={color}
            className={styles.card__color}
          ></div>
        ))}
      </div>

      <span className={styles.card__header}>Type:</span>
      {types?.map((type: string) => (
        <b key={type}>{type}</b>
      ))}
    </div>
  );
}
