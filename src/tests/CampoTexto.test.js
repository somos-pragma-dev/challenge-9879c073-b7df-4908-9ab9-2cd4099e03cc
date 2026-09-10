import { validateText } from '../validation/validator';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CampoTexto from '../components/CampoTexto';

test('valida texto correctamente', () => {
  render(<CampoTexto />);
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'ab' } });
  expect(screen.getByText('El texto debe tener al menos 3 caracteres')).toBeInTheDocument();
  fireEvent.change(input, { target: { value: 'abc' } });
  expect(screen.queryByText('El texto debe tener al menos 3 caracteres')).not.toBeInTheDocument();
});

test('valida texto vacío', () => {
  expect(validateText('').error).toBe('El texto debe tener al menos 3 caracteres');
});