import React from 'react';
import Search from '../Search/Search';
import SearchResultFetch from 'components/SearchResultFetch/SearchResultFetch';

function Main(): JSX.Element {
  return (
    <main>
      <Search />
      <SearchResultFetch />
    </main>
  );
}
export default Main;
