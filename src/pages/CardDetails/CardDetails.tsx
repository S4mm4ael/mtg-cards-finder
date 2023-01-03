import { GlobalContext } from 'contexts/Context';
import React, { useContext, useEffect, useState } from 'react';
import { getCard } from '../../utils/fetch';
import ICardDetails from './ICardDetails';
import styles from './CardDetails.module.css';
import { spawn } from 'child_process';

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
        <>
          <h1 className={styles.card__title}>{card?.name}</h1>
          <div className={styles.card__wrapper}>
            <div className={styles.wrapper__left}>
              <img
                style={state.min ? { display: 'none' } : { display: 'block' }}
                className={styles.card__img}
                width={300}
                src={`${card && card.imageUrl}`}
                alt={`${card && card.name}`}
                onLoad={() => setIsLoaded(false)}
              />
            </div>
            <div className={styles.wrapper__right}>
              <h3>Card attributes</h3>
              <ul className={styles.attributes__list}>
                <li>
                  <span className={styles.list__titles}>Type: </span>
                  {card?.type}
                </li>
                <li className={styles.list__colors}>
                  <span className={styles.list__titles}>Colors: </span>
                  <div className={styles.color__wrapper}>
                    {card?.colors?.map((color: string) => {
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
                </li>
                <li>
                  <span className={styles.list__titles}>Rarity: </span>
                  {card?.rarity}
                </li>
                <li>
                  <span className={styles.list__titles}>Set: </span>
                  {card?.set}
                </li>
                <li>
                  <span className={styles.list__titles}>Set name: </span>
                  {card?.setName}
                </li>
                <li>
                  <span className={styles.list__titles}>Text: </span>
                  {card?.text}
                </li>
                <li>
                  <span className={styles.list__titles}>Flavor: </span>
                  {card?.flavor}
                </li>
                <li>
                  <span className={styles.list__titles}>Artist: </span>
                  {card?.artist}
                </li>
                <li>
                  <span className={styles.list__titles}>Number: </span>
                  {card?.number}
                </li>
                <li>
                  <span className={styles.list__titles}>Printings: </span>
                  {card?.printings.map((item, index) => {
                    return <b key={index}>{item} </b>;
                  })}
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default CardDetails;
