import { API } from "aws-amplify";
import { useState } from "react";
import { createFolder } from "../../graphql/mutations";

const initalValues = {
  title: "",
};

const AddFolderForm = ({ hideForm }) => {
  const [formState, setFormState] = useState(initalValues);

  async function handleSubmit(e) {
    e.preventDefault();
    const folder = { ...formState };
    try {
      const newFolder = await API.graphql({
        query: createFolder,
        variables: {
          input: folder,
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      console.log(newFolder)
    } catch (err) {
      console.error(err.message);
    }
    setFormState(initalValues);
    hideForm((oldValue) => !oldValue);
  }

  function handleChange(e) {
    setFormState((oldState) => {
      return { ...oldState, [e.target.name]: e.target.value };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
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

export default AddFolderForm;
