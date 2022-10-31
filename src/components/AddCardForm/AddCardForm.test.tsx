import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
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
    const submit = document.getElementById('submit') as HTMLButtonElement;
    expect(submit.disabled).toEqual(true);
  });
});
describe('When user fill fields ', () => {
  test('Should change name value', async () => {
    render(<AddCardForm />);
    const inputEl = screen.getByTestId('name') as HTMLInputElement;
    await userEvent.type(inputEl, 'Test name');
    expect(screen.getByTestId('name')).toHaveValue('Test name');
  });
  test('Should change type value', async () => {
    render(<AddCardForm />);
    const inputEl = screen.getByTestId('type') as HTMLInputElement;
    await userEvent.type(inputEl, 'Creature');
    expect(screen.getByTestId('type')).toHaveValue('Creature');
  });
});
describe('When user fill all fields correct', () => {
  it.todo('Render Card component with proper fields');
});
describe('When user click "One more" button ', () => {
  it.todo(' it clear the form');
});
