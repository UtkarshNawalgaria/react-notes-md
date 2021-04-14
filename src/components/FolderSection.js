import { FolderAddIcon } from '@heroicons/react/solid';
import React, { useState } from 'react'
import AddFolderForm from './Forms/AddFolderForm';
import FolderList from './FolderList';

const FolderSection = () => {
    const [showForm, setShowForm] = useState(false)

    return (
      <div className="w-full">
        <div className="py-4 px-4 flex justify-between">
          <h1>Your Notebooks</h1>
          <button onClick={() => setShowForm((oldValue) => !oldValue)}>
            <FolderAddIcon className="h-6 w-6 focus:outline-transparent text-gray-600" />
          </button>
        </div>
        <div className={showForm ? "block px-4 pb-2" : "hidden"}>
          <AddFolderForm hideForm={setShowForm} />
        </div>
        <div>
          <FolderList />
        </div>
      </div>
    );
}

export default FolderSection
