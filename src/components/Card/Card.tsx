import React, { useState } from 'react';
import styles from './Card.module.css';
import '../../index.css';
import { ICard } from './ICard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/store';

export function Card(props: ICard): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const minimized = useSelector((state: RootState) => state.otherReducer.min);
  const [isLoaded, setIsLoaded] = useState(true);

  function handleIdSelect(id: string): void {
    dispatch({ type: 'CARD_ID', payload: id });
  }

  return (
    <div
      id={`card-${props.id}`}
      style={{
        background: `linear-gradient(180deg, #ffffff 0%, ${props.colors?.map((color: string) => {
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
      <h5 className={styles.card__title}>{props.name}</h5>
      {isLoaded && (
        <div className={styles.loader__container}>
          <div className={styles.spinner}></div>
        </div>
      )}
      <img
        style={minimized ? { display: 'none' } : { display: 'block' }}
        className={styles.card__img}
        width={200}
        src={`${props.image ? URL.createObjectURL(props.image) : props.imageUrl}`}
        alt={props.name}
        onLoad={() => setIsLoaded(false)}
      />

      <span className={styles.card__header}>Colors:</span>
      <div className={styles.color__wrapper}>
        {props.colors?.map((color: string) => {
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
      {props.types?.map((type: string) => (
        <b key={type}>{type}</b>
      ))}
      <Link
        className={styles.card__details}
        onClick={() => handleIdSelect(props.id)}
        to={`/card/${props.id}`}
      >
        More
      </Link>
    </div>
  );
}
