import React, { useEffect, useState, useContext } from 'react';
import styles from '../Card/Card.module.css';
import { Card } from 'components/Card/Card';
import { ICard } from 'components/Card/ICard';
import { getCards } from 'utils/fetch';
import { GlobalContext } from 'contexts/Context';

function SearchResultFetch() {
  const [cardsList, setCardsList] = useState<ICard[] | null | undefined>();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [nothing, setNothing] = useState(false);

  const { state } = useContext(GlobalContext);

  const cardSort = (cards: ICard[] | null | undefined, isReverse: boolean) => {
    const newCards =
      cards &&
      cards.sort((a: { name: string }, b: { name: string }) =>
        isReverse ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
      );
    return newCards;
  };

  function handleSorting(sort: string) {
    switch (sort) {
      case 'ZA':
        setCardsList(cardSort(cardsList, false));
        break;
      default:
        setCardsList(cardSort(cardsList, true));
        return;
    }
  }

  useEffect(() => {
    setIsPending(true);
    setNothing(false);
    getCards(state.url, state.page)
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
  }, [state.url, state.page]);

  useEffect(() => {
    handleSorting(state.sort);
  }, [state.sort, handleSorting]);

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
