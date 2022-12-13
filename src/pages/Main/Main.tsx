import { GlobalContext } from 'contexts/Context';
import React, { useState } from 'react';
import Search from '../../components/Search/Search';

function Main(): JSX.Element {
  const page = Math.floor(Math.random() * (100 - 1)) + 1;
  const pageSize = 10;
  const initialUrl = `https://api.magicthegathering.io/v1/cards?page=${page}&pageSize=${pageSize}`;

  const [url, setUrl] = useState<string>(initialUrl);

  return (
    <GlobalContext.Provider value={{ url, setUrl }}>
      <main>
        <Search />
      </main>
    </GlobalContext.Provider>
  );
}
export default Main;
