import { useState, useCallback } from "react";

export const useFormAndValidate = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [errors, setErrors] = useState({});
  const [isNoErrors, setIsNoErrors] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { value, name, validationMessage } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setIsNoErrors(target.closest("form")?.checkValidity() || false);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsNoErrors = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsNoErrors(newIsNoErrors);
    },
    [setValues, setErrors, setIsNoErrors]
  );

  return {
    handleChange,
    resetForm,
    values,
    setValues,
    errors,
    setErrors,
    isNoErrors,
    setIsNoErrors,
  };
};
