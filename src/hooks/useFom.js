import { useState } from 'react';

function useForm(inicialValues) {
  const [values, setValues] = useState(inicialValues);

  function setVal(key, val) {
    // key: name, description, etc.
    setValues({
      ...values,
      [key]: val, // name: 'value'
    });
  }

  function handleChange(infoEvent) {
    setVal(
      infoEvent.target.getAttribute('name'),
      infoEvent.target.value,
    );
  }

  function clearForm() {
    setValues(inicialValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
