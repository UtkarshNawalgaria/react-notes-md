import { useDispatch, useSelector } from 'react-redux'
import { fetchNoteById } from '../features/notes'

const NoteList = () => {
  const { notes, currentFolderId, note: currentNote } = useSelector(state => state.notes)
  const dispatch = useDispatch()

  async function handleClick(id) {
    dispatch(fetchNoteById(id));
  }

  if (Object.keys(notes).length === 0) {
    return <></>;
  }

  if(notes[currentFolderId].length === 0) {
    return <div className="text-gray-900 pl-4">Please Create new Notes</div>
  }

  return (
    <>
      <ul className="flex flex-col gap-2">
        {notes[currentFolderId].map((note) => (
          <li key={note.id} onClick={() => handleClick(note.id)} className={
            "py-2 text-gray-900 hover:bg-gray-200 cursor-pointer " +
            (currentNote.id === note.id ? "bg-gray-200" : "")
          }>
            <h2 className="pl-4 text-gray-900">{note.title}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NoteList;
