import React from 'react';
import Search from '../Search/Search';

function Main(): JSX.Element {
  const page = Math.floor(Math.random() * (100 - 1)) + 1;
  const pageSize = 10;
  const query = `https://api.magicthegathering.io/v1/cards?page=${page}&pageSize=${pageSize}`;
  return (
    <main>
      <Search startQuery={query} />
    </main>
  );
}
export default Main;
