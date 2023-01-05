import { render } from '@testing-library/react';
import React from 'react';
import About from './About';

describe('when rendered', () => {
  it('should contain About section', () => {
    render(<About />);
    const result = document.getElementById('about-section');
    expect(result).toBeInTheDocument();
  });
});
