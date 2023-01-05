import { render } from '@testing-library/react';
import React from 'react';
import Search from '../Search/Search';

describe('Search card', () => {
  test('fetch and display card', async () => {
    const query =
      'https://api.magicthegathering.io/v1/cards?id=5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c';
    const { findByText } = render(<Search />);
    expect(await findByText("Ancestor's Chosen")).toBeInTheDocument();
  });
});
