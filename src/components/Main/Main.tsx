import React from 'react';
import Search from '../Search/Search';
import { Card } from 'components/Card/Card';

function Main(): JSX.Element {
  return (
    <>
      <Search />
      <main>
        <section className="card__section">
          <Card />
        </section>
      </main>
    </>
  );
}
export default Main;
