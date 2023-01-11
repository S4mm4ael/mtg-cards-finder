/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styles from '../Card/Card.module.css';
import { Card } from 'components/Card/Card';
import { ICard } from 'components/Card/ICard';
import { getCards, getSearchedCard } from 'utils/fetch';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

function SearchResultFetch() {
  const [cardsList, setCardsList] = useState<ICard[] | null | undefined>();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [nothing, setNothing] = useState(false);
  const { isSearching, query, sort, page, count } = useSelector(
    (state: RootState) => state.otherReducer
  );

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
      case 'Z-A':
        setCardsList(cardSort(cardsList, false));
        break;
      default:
        setCardsList(cardSort(cardsList, true));
        return;
    }
  }

  function getData(isSearching: boolean) {
    if (isSearching) {
      return getSearchedCard(query);
    }
    return getCards(page);
  }

  useEffect(() => {
    setIsPending(true);
    setNothing(false);
    getData(isSearching)
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
    handleSorting(sort);
  }, [page, isSearching, query]);

  useEffect(() => {
    handleSorting(sort);
  }, [sort, handleSorting, page]);

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
            if (item.imageUrl && index <= count) {
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
