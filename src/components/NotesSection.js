import { PlusIcon } from '@heroicons/react/solid';
import React, { useState } from 'react'
import AddNoteForm from './Forms/AddNoteForm';
import NoteList from './NoteList';

const NotesSection = () => {

    const [showForm, setShowForm] = useState(false)
    return (
      <>
        <div className="py-4 px-4 flex justify-between text-gray-900 border-b mb-4 bg-white shadow-md">
          <h1>List of Notes</h1>
          <button onClick={() => setShowForm((oldValue) => !oldValue)}>
            <PlusIcon className="h-6 w-6 focus:outline-transparent" />
          </button>
        </div>
        <div className={showForm ? "block px-4 pb-2" : "hidden"}>
          <AddNoteForm hideForm={setShowForm} />
        </div>
        <div>
          <NoteList />
        </div>
      </>
    );
}

export default NotesSection
