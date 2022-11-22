import React, { useState } from 'react';
import styles from './Card.module.css';
import '../../index.css';
import { ICard } from './ICard';

export function Card({
  id,
  name,
  types,
  colors,
  imageUrl,
  image,
  min,
  setShowShadow,
  modal,
}: ICard): JSX.Element {
  const [modalOpen, setModalOpen] = useState(modal);

  function openModal() {
    if (min) {
      setModalOpen(true);
      setShowShadow(true);
    }
  }

  function closeModal(e: React.MouseEvent<HTMLDivElement>) {
    const element = e.target as HTMLDivElement;
    if (!element.classList.contains(styles.card)) {
      setShowShadow(false);
      setModalOpen(false);
    }
  }

  return (
    <div className={`${styles.modal_wrapper} ${modalOpen ? styles.modal : styles.modal_wrapper}`}>
      {modalOpen && (
        <div
          onClick={(e) => {
            closeModal(e);
          }}
          className={styles.modal__cross}
          id="modal-cross"
        >
          X
        </div>
      )}
      <div
        id={`card-${id}`}
        onClick={openModal}
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
        className={`${styles.card} ${modalOpen ? styles.modal : styles.nomodal}`}
      >
        <h5 className={styles.card__title}>{name}</h5>
        <img
          style={min && !modalOpen ? { display: 'none' } : { display: 'block' }}
          className={styles.card__img}
          width={200}
          src={`${image ? URL.createObjectURL(image) : imageUrl}`}
          alt={name}
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
    </div>
  );
}
