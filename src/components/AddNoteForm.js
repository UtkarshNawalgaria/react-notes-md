import { useContext, useState } from "react";
import { NotesContext } from "../store";
import { API } from 'aws-amplify'
import {createNote} from '../graphql/mutations'

const initalValues = {
  title: "",
  content: "",
}

const AddNoteForm = ({ hideForm }) => {
  const [formState, setFormState] = useState(initalValues);
  const { state: { currentId }, dispatch } = useContext(NotesContext);

  async function handleSubmit(e) {
    e.preventDefault();
    const note = { ...formState, folderId: currentId }
    try {
      const data = await API.graphql({
        query: createNote,
        variables: {
          input: note,
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      dispatch({ type: 'ADD_NOTE', payload: {note: data.data.createNote}})
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
