import React from 'react';
import Search from '../Search/Search';
import AddCardForm from '../AddCardForm/AddCardForm';
import styles from '../Card/Card.module.css';
import { Card } from 'components/Card/Card';
import { cardArray } from 'components/Card/cardData';

function Main(): JSX.Element {
  return (
    <main>
      <Search />
      <section className={styles.card__section}>
        {cardArray.map((item, curId) => (
          <Card key={item.name} id={curId} />
        ))}
      </section>
    </main>
  );
}
export default Main;
