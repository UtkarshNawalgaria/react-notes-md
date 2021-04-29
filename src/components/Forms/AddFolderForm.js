import { API } from "aws-amplify";
import { useState } from "react";
import { createFolder } from "../../graphql/mutations";
import { addNewFolder } from "../../features/notes";
import { useDispatch} from "react-redux"

const initalValues = {
  title: "",
};

const AddFolderForm = ({ hideForm }) => {
  const [formState, setFormState] = useState(initalValues);
  const dispatch = useDispatch()

  async function handleSubmit(e) {
    e.preventDefault();
    const folder = { ...formState };
    try {
      const {data: {createFolder: newFolder}} = await API.graphql({
        query: createFolder,
        variables: {
          input: folder,
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      dispatch(addNewFolder({ folder: newFolder}));
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
        placeholder="New Folder Name..."
        className="w-full rounded-sm p-2 text-gray-500"
      />
    </form>
  );
};

export default AddFolderForm;
