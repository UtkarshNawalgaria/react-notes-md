import React, { useState } from "react";

const Form = ({ initialValues, handleSubmit }) => {
  const [formState, setFormState] = useState(initialValues);

  function handleFormSubmit () {
      handleSubmit()
      setFormState(initialValues);
  }

  function handleChange(e) {
    setFormState((oldState) => {
      return { ...oldState, [e.target.name]: e.target.value };
    });
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="title"
        values={formState.title}
        onChange={handleChange}
        className="w-full rounded-sm p-2 text-gray-500"
      />
    </form>
  );
};

export default Form;
