import React, { useEffect, useState } from 'react';
import styles from '../Card/Card.module.css';
import { Card } from 'components/Card/Card';
import { Modal } from 'components/Modal/Modal';
import { ICard } from 'components/Card/ICard';

function SearchResultFetch({ url = '', min = false }) {
  const [cardsList, setCardsList] = useState<{
    cards: ICard[];
  } | null>();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [nothing, setNothing] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [selectedCard, setSelectedCard] = useState('');

  useEffect(() => {
    setCardsList(null);
    setIsPending(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the data');
        }
        return res.json();
      })
      .then((data) => {
        setCardsList(data);
        setIsPending(false);
        setError(null);
        data.cards.length === 0 ? setNothing(true) : setNothing(false);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);

  return (
    <section className={styles.card__section}>
      {error && <div>{error}</div>}
      {isPending && <div>Download data...</div>}
      {nothing && <div>Nothing found...</div>}
      {cardsList && <Modal array={cardsList} id={selectedCard} />}
      {cardsList &&
        cardsList.cards.map((item, index) => {
          if (item.imageUrl) {
            return (
              <Card
                key={index}
                id={item.id}
                name={item.name}
                colors={item.colors}
                imageUrl={item.imageUrl}
                types={item.types}
                min={min}
                passSelectedCard={setSelectedCard}
              />
            );
          }
        })}
    </section>
  );
}

export default SearchResultFetch;
