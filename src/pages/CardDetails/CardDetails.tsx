import { GlobalContext } from 'contexts/Context';
import React, { useContext, useEffect, useState } from 'react';
import { getCard } from '../../utils/fetch';
import ICardDetails from './ICardDetails';
import styles from './CardDetails.module.css';

function CardDetails(props: { id: string }) {
  const [card, setCard] = useState<ICardDetails | null | undefined>();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [nothing, setNothing] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);

  const { state } = useContext(GlobalContext);

  useEffect(() => {
    setIsPending(true);
    setNothing(false);
    getCard(state.id)
      .then((data) => {
        setCard(data.card);
        setIsPending(false);
        setError(null);
        data.card == null ? setNothing(true) : setNothing(false);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
    console.log(card);
  }, [state.id]);

  return (
    <section
      id={`card-${props.id}`}
      style={{
        background: `linear-gradient(180deg, #ffffff 0%, ${card?.colors?.map((color: string) => {
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
      className={styles.card__section}
    >
      {error && <div>{error}</div>}
      {isPending && (
        <div className={styles.loader__container}>
          <div className={styles.spinner}></div>
        </div>
      )}
      {nothing && <div>Nothing found...</div>}
      {!isPending && !nothing && (
        <div className={styles.card__wrapper}>
          <h1 className={styles.card__title}>{card?.name}</h1>
          <img
            style={state.min ? { display: 'none' } : { display: 'block' }}
            className={styles.card__img}
            width={300}
            src={`${card && card.imageUrl}`}
            alt={`${card && card.name}`}
            onLoad={() => setIsLoaded(false)}
          />
        </div>
      )}
    </section>
  );
}

export default CardDetails;
