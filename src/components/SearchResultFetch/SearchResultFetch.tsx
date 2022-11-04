import React, { useEffect, useState } from 'react';
import styles from '../Card/Card.module.css';
import { Card } from 'components/Card/Card';

function SearchResultFetch({ url = 'https://api.magicthegathering.io/v1/cards' }) {
  const [cardsList, setCardsList] = useState<{ cards: { name: string; imageUrl: string }[] }>();

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
            return <Card key={index} {...item} />;
          }
        })}
    </section>
  );
}

export default SearchResultFetch;
