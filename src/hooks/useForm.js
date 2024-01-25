import  { useState, useCallback } from "react";

export function useFormWithValidation() {
  const [formState, setFormState] = useState({
    values: {},
    errors: {},
    isValid: false,
  });

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setFormState((prevState) => ({
      values: { ...prevState.values, [name]: value },
      errors: { ...prevState.errors, [name]: target.validationMessage },
      isValid: target.closest("form").checkValidity(),
    }));
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setFormState({
        values: newValues,
        errors: newErrors,
        isValid: newIsValid,
      });
    },
    [setFormState]
  );

  return { ...formState, handleChange, resetForm };
}