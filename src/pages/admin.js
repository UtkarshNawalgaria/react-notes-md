import { withAuthenticator } from "@aws-amplify/ui-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import FolderSection from "../components/FolderSection";
import MarkdownEditor from "../components/MarkdownEditor";
import NotesSection from "../components/NotesSection";
import { useAuth } from "../hooks/auth";
import { fetchData } from '../features/notes'


const NotesPage = () => {
  const auth = useAuth();
  const dispatch = useDispatch()
  const { note } = useSelector((state) => state.notes)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);

  return (
    <>
      <div className="flex text-gray-100">
        <aside className="w-1/5 h-screen bg-gray-500 sticky top-0">
          <div className="flex flex-col justify-between h-full">
            <FolderSection />

            {/* Signout Button */}
            <div>
              <button
                onClick={() => auth.signout()}
                className="px-4 py-2 w-full text-gray-100 hover:bg-gray-600 rounded-sm"
              >
                Sign Out
              </button>
            </div>
          </div>
        </aside>
        <aside className="w-1/5 h-screen bg-gray-600 sticky top-0">
          <NotesSection />
        </aside>
        <main className="w-full p-10 text-white bg-gray-500">
          <div className="prose max-w-none">
            <MarkdownEditor note={note}/>
          </div>
        </main>
      </div>
    </>
  );
};

export default withAuthenticator(NotesPage);
