import { validateDate } from '../validation/validator';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CampoFecha from '../components/CampoFecha';

test('valida fecha correctamente', () => {
  render(<CampoFecha />);
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'abc' } });
  expect(screen.getByText('La fecha es inválida')).toBeInTheDocument();
  fireEvent.change(input, { target: { value: '2023-10-10' } });
  expect(screen.queryByText('La fecha es inválida')).not.toBeInTheDocument();
});

test('valida fecha inválida', () => {
  expect(validateDate('abc').error).toBe('La fecha es inválida');
});