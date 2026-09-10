import React, { useState } from 'react';
import { validateText } from '../validation/validator';

const CampoTexto = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    const validationResult = validateText(inputValue);
    setError(validationResult.error);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default CampoTexto;