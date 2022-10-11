import { render } from '@testing-library/react';
import React from 'react';
import Header from './Header';

describe('when rendered', () => {
  it('should contain Header', () => {
    render(<Header />);
    const result = document.getElementById('navigation');
    expect(result).toBeInTheDocument();
  });
});
