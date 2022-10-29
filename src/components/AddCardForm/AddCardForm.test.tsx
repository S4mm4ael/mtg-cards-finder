import { render } from '@testing-library/react';
import React from 'react';
import AddCardForm from './AddCardForm';

describe('When create page loaded', () => {
  it('Should render form section', () => {
    render(<AddCardForm />);
    const result = document.getElementById('add-card-form');
    expect(result).toBeInTheDocument;
  });
});
describe('When user dont fill all neccesary fields correct', () => {
  it('Should keep submit button as inactive', () => {
    render(<AddCardForm />);
    const result = document.getElementById('submit') as HTMLButtonElement;
    expect(result.disabled).toEqual(true);
  });
});
