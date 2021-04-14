import { useState } from "react";
import { API } from 'aws-amplify'
import {createNote} from '../../graphql/mutations'
import { useDispatch, useSelector } from "react-redux";
import { addNewNote } from "../../features/notes";

const initalValues = {
  title: "",
  content: "",
}

const AddNoteForm = ({ hideForm }) => {
  const [formState, setFormState] = useState(initalValues);
  const { currentFolderId} = useSelector(state => state.notes)
  const dispatch = useDispatch()

  async function handleSubmit(e) {
    e.preventDefault();
    const note = { ...formState, folderId: currentFolderId }
    try {
      const {data: {createNote: newNote}} = await API.graphql({
        query: createNote,
        variables: {
          input: note,
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      dispatch(addNewNote({ note: newNote }))
    } catch(err) {
      console.error(err.message)
    }
    setFormState(initalValues);
    hideForm(oldValue => !oldValue);
  }

  function handleChange(e) {
    setFormState((oldState) => {
        return { ...oldState, [e.target.name]: e.target.value };
    })
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

export default AddNoteForm;
