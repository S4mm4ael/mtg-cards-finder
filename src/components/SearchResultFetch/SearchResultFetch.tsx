import React, { useEffect, useState } from 'react';
import styles from '../Card/Card.module.css';
import { Card } from 'components/Card/Card';

function SearchResultFetch({ url = '' }) {
  const [cardsList, setCardsList] = useState<{
    cards: { id: string; name: string; types?: string[]; colors: string[]; imageUrl?: string }[];
  }>();

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCardsList(data);
      });
  });
  return (
    <section className={styles.card__section}>
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
