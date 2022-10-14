import React from 'react';
import styles from './Card.module.css';
import { cardArray } from './cardData';

// interface ICard {
//   id: number;
//   title: string;
//   imageUrl: string;
//   price: number;
//   fraction: string;
// }

export function Card(): JSX.Element {
  const id = 0;
  return (
    <div id={`card-${id + 1}`} className={styles.card}>
      <img width={200} height={200} src={cardArray[id].imageUrl} alt={cardArray[id].title} />
      <h5>{cardArray[id].title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{cardArray[id].price} $</b>
        </div>
      </div>
    </div>
  );
}
