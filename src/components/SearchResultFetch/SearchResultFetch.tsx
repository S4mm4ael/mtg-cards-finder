import React, { useEffect, useState } from 'react';
import styles from '../Card/Card.module.css';
import { Card } from 'components/Card/Card';

function SearchResultFetch({ url = '' }) {
  const [cardsList, setCardsList] = useState<{
    cards: { id: string; name: string; types?: string[]; colors: string[]; imageUrl?: string }[];
  }>();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);

  return (
    <section className={styles.card__section}>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
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
              />
            );
          }
        })}
    </section>
  );
}

export default SearchResultFetch;
