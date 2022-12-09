import { render } from '@testing-library/react';
import React from 'react';
import Main from './Main';

describe('when rendered', () => {
  it('should contain search bar', () => {
    render(<Main />);
    const result = document.getElementById('search');
    expect(result).toBeInTheDocument();
  });
});
