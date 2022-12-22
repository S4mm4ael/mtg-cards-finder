import React, { useEffect, useState, useContext } from 'react';
import styles from '../Card/Card.module.css';
import { Card } from 'components/Card/Card';
import { ICard } from 'components/Card/ICard';
import { getCards } from 'utils/fetch';
import { GlobalContext } from 'contexts/Context';

function SearchResultFetch(props: { sort: string }) {
  const [cardsList, setCardsList] = useState<ICard[] | null | undefined>();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [nothing, setNothing] = useState(false);

  const { state } = useContext(GlobalContext);

  function handleSorting(cardsList: ICard[] | null | undefined, sort: string) {
    const cardsToSort = cardsList!;

    switch (sort) {
      case 'ZA':
        setCardsList(cardsToSort.sort().reverse());

        break;
      case 'T':
        const sortableArrayT = [...cardsToSort].sort((a, b) => (a.types[0] > b.types[0] ? 1 : -1));
        setCardsList(sortableArrayT);

        break;

      default:
        setCardsList(cardsToSort);

        return;
    }
  }

  useEffect(() => {
    setIsPending(true);
    setNothing(false);
    getCards(state.url)
      .then((data) => {
        setCardsList(data.cards);
        setIsPending(false);
        setError(null);
        data.cards.length === 0 ? setNothing(true) : setNothing(false);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [state.url]);

  useEffect(() => {
    handleSorting(cardsList, props.sort);
  }, [props.sort]);

  return (
    <section className={styles.card__section}>
      {error && <div>{error}</div>}
      {isPending && (
        <div className={styles.loader__container}>
          <div className={styles.spinner}></div>
        </div>
      )}
      {nothing && <div>Nothing found...</div>}
      <div className={styles.render__result}>
        {cardsList &&
          cardsList.map((item, index) => {
            if (item.imageUrl) {
              return (
                <Card
                  key={index}
                  id={item.id}
                  name={item.name}
                  colors={item.colors}
                  imageUrl={item.imageUrl}
                  types={item.types}
                />
              );
            }
          })}
      </div>
    </section>
  );
}

export default SearchResultFetch;
