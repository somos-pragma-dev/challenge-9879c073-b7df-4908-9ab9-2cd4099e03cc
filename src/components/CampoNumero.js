import React, { useState } from 'react';
import { validateNumber } from '../validation/validator';

const CampoNumero = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    const validationResult = validateNumber(inputValue);
    setError(validationResult.error);
  };

  return (
    <div>
      <input type="number" value={value} onChange={handleChange} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default CampoNumero;