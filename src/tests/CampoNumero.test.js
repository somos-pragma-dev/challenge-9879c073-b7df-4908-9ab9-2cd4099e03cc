import { validateNumber } from '../validation/validator';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CampoNumero from '../components/CampoNumero';

test('valida número correctamente', () => {
  render(<CampoNumero />);
  const input = screen.getByRole('spinbutton');
  fireEvent.change(input, { target: { value: '-1' } });
  expect(screen.getByText('El número debe ser positivo')).toBeInTheDocument();
  fireEvent.change(input, { target: { value: '1' } });
  expect(screen.queryByText('El número debe ser positivo')).not.toBeInTheDocument();
});

test('valida número no numérico', () => {
  expect(validateNumber('abc').error).toBe('El número debe ser positivo');
});