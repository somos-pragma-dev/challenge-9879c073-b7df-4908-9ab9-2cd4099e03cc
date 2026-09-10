export const validateText = (value) => {
  if (value.length < 3) {
    return { error: 'El texto debe tener al menos 3 caracteres' };
  }
  return { error: '' };
};

export const validateNumber = (value) => {
  if (isNaN(value) || value < 0) {
    return { error: 'El número debe ser positivo' };
  }
  return { error: '' };
};

export const validateDate = (value) => {
  const date = new Date(value);
  if (isNaN(date.getTime())) {
    return { error: 'La fecha es inválida' };
  }
  return { error: '' };
};