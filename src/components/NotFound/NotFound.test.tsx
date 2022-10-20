import { render } from '@testing-library/react';
import React from 'react';
import App from '../../App';
import { MemoryRouter } from 'react-router-dom';

describe('when you pass to undefined page', () => {
  it('should return 404 page', () => {
    render(
      <MemoryRouter initialEntries={[`/${Math.random}`]}>
        <App />
      </MemoryRouter>
    );
    const result = document.getElementById('not-found');
    expect(result).toBeInTheDocument();
  });
});
