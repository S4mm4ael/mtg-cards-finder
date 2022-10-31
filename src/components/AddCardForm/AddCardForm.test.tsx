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
    await userEvent.selectOptions(inputEl, 'Creature');
    expect(screen.getByTestId('type')).toHaveValue('Creature');
  });
  test('Should click on colors checkboxes', async () => {
    render(<AddCardForm />);
    for (let i = 0; i < 5; i++) {
      const inputEl = screen.getByTestId(`color-${i}`) as HTMLInputElement;
      await userEvent.click(inputEl);
      expect(screen.getByTestId('color-0')).toBeChecked();
    }
  });
});
