import React, { useContext, useState } from 'react';
import styles from './Card.module.css';
import '../../index.css';
import { ICard } from './ICard';
import { GlobalContext } from 'contexts/Context';

export function Card({ id, name, types, colors, imageUrl, image }: ICard): JSX.Element {
  const { state } = useContext(GlobalContext);
  const [isLoaded, setIsLoaded] = useState(true);
  return (
    <div
      id={`card-${id}`}
      style={{
        background: `linear-gradient(180deg, #ffffff 0%, ${colors?.map((color: string) => {
          switch (color) {
            case 'W':
              color = 'white';
              break;
            case 'B':
              color = 'black';
              break;
            case 'G':
              color = 'green';
              break;
            case 'R':
              color = 'red';
              break;
            default:
              color = 'blue';
          }
          return color;
        })} 120%)`,
      }}
      className={styles.card}
    >
      <h5 className={styles.card__title}>{name}</h5>
      {isLoaded && (
        <div className={styles.loader__container}>
          <div className={styles.spinner}></div>
        </div>
      )}
      <img
        style={state.min ? { display: 'none' } : { display: 'block' }}
        className={`${styles.card__img}`}
        width={200}
        src={`${image ? URL.createObjectURL(image) : imageUrl}`}
        alt={name}
        onLoad={() => setIsLoaded(false)}
      />

      <span className={styles.card__header}>Colors:</span>
      <div className={styles.color__wrapper}>
        {colors?.map((color: string) => {
          switch (color) {
            case 'W':
              color = 'white';
              break;
            case 'B':
              color = 'black';
              break;
            case 'G':
              color = 'green';
              break;
            case 'R':
              color = 'red';
              break;
            default:
              color = 'blue';
          }
          return (
            <div
              style={{ backgroundColor: `${color}` }}
              key={color}
              className={styles.card__color}
            ></div>
          );
        })}
      </div>

      <span className={styles.card__header}>Type:</span>
      {types?.map((type: string) => (
        <b key={type}>{type}</b>
      ))}
    </div>
  );
}
