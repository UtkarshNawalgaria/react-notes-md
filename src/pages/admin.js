import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FolderSection from "../components/FolderSection";
import MarkdownEditor from "../components/MarkdownEditor";
import NotesSection from "../components/NotesSection";
import { fetchData } from "../features/notes";
import Profile from "../components/Profile";
import { withAuthenticator } from "@aws-amplify/ui-react";

const NotesPage = () => {
  const dispatch = useDispatch();
  const { note } = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="flex text-gray-100 bg-gray-50">
      <aside className="w-1/5 h-screen sticky top-0">
        <div className="flex flex-col justify-between h-full">
          <FolderSection />
          <div>
            <Profile />
          </div>
        </div>
      </aside>
      <aside className="w-1/5 h-screen sticky top-0 border-l border-r">
        <NotesSection />
      </aside>
      <main className="w-full text-gray-900 flex flex-col">
        <div className="py-4 px-10 mb-4 border-b bg-white shadow-md sticky top-0 z-20">
          {/* <Profile /> */}
          <p> </p>
        </div>
        <div className="prose max-w-none px-10">
          <MarkdownEditor note={note} />
        </div>
      </main>
    </div>
  );
};

export default withAuthenticator(NotesPage);
