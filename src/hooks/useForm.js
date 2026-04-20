import { useState } from "react";

function useForm(initialValues = {}) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const setFormValues = (newValues) => {
    setValues(newValues);
  };

  return { values, handleChange, setFormValues };
}

export default useForm;
