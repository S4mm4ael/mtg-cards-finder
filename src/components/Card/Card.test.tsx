import { render } from '@testing-library/react';
import React from 'react';
import { cardArray } from './cardData';
import Main from 'components/Main/Main';

describe('when main page loaded', () => {
  it('should contain first card', () => {
    render(<Main />);
    const result = document.getElementById('card-1');
    expect(result).toBeInTheDocument();
  });
});
