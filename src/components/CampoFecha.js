import React, { useState } from 'react';
import { validateDate } from '../validation/validator';

const CampoFecha = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    const validationResult = validateDate(inputValue);
    setError(validationResult.error);
  };

  return (
    <div>
      <input type="date" value={value} onChange={handleChange} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default CampoFecha;