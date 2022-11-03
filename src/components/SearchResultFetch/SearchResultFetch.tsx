import React, { useEffect, useState } from 'react';
import styles from '../Card/Card.module.css';
import { Card } from 'components/Card/Card';
import { cardArray } from 'components/Card/cardData';

function SearchResultFetch() {
  const [cards, setCards] = useState(null);
  const url = 'https://api.magicthegathering.io/v1/cards';

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <section className={styles.card__section}>
      {cardArray.map((item) => (
        <Card key={item.name} {...item} />
      ))}
    </section>
  );
}

export default SearchResultFetch;
