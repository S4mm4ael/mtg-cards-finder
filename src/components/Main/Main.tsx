import React from 'react';
import Search from '../Search/Search';
import SearchResultFetch from 'components/SearchResultFetch/SearchResultFetch';

function Main(): JSX.Element {
  const query = 'https://api.magicthegathering.io/v1/cards';
  return (
    <main>
      <Search />
      <SearchResultFetch url={query} />
    </main>
  );
}
export default Main;
