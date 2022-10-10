import { render, screen } from '@testing-library/react';
import React from 'react';
import About from './About';

describe('when rendered', () => {
  it('should contain About text', () => {
    render(<About />);
    const result = screen.getByText(/Hi! My name is Semion/);
    expect(result).toBeInTheDocument();
  });
});
