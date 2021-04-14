import useNotes from "../store";

const NoteList = () => {
  const {
    state: { notes, currentFolderId }
  } = useNotes()

  if (Object.keys(notes).length === 0) {
    return <></>;
  }

  if(notes[currentFolderId].length === 0) {
    return <div className="text-white pl-4">Please Create new Notes</div>
  }

  return (
    <>
      <ul className="flex flex-col gap-2">
        {notes[currentFolderId].map((note) => (
          <li key={note.id} className="py-2 hover:bg-gray-600 cursor-pointer">
            <h2 className="pl-4">{note.title}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NoteList;
