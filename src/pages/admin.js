import { withAuthenticator } from "@aws-amplify/ui-react";
import { API, Auth } from "aws-amplify";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AddNoteForm from "../components/AddNoteForm";
import FolderList from "../components/FolderList";
import NoteList from "../components/NoteList";
import { listFolders } from "../graphql/queries";
import { NotesContext } from "../store";

const NotesPage = () => {
  let history = useHistory();
  const { dispatch } = useContext(NotesContext);
  const [show, setShow] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        const folders = await API.graphql({
          query: listFolders,
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        console.log(folders);
        dispatch({
          type: "SET_DATA",
          payload: { items: folders.data.listFolders.items },
        });
      } catch (err) {
        console.error("Inside Fetch", err.message);
      }
    })();
  }, [dispatch]);

  async function signOut() {
    try {
      await Auth.signOut();
      history.push("/");
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div>
      <div>
        <div className="flex text-gray-100">
          <div className="w-1/3 flex place-items-center justify-items-center">
            <aside className="h-screen w-1/2 bg-gray-500">
              <div className="flex flex-col justify-between h-full">
                <div className="w-full">
                  <div className="py-4 pl-4">
                    <h1>Your Notebooks</h1>
                    {/* <UserInfo /> */}
                  </div>
                  <FolderList />
                </div>

                {/* Signout Button */}
                <div>
                  <button
                    onClick={signOut}
                    className="px-4 py-2 w-full text-gray-100 hover:bg-gray-600 rounded-sm"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </aside>
            <aside className="h-screen w-1/2 bg-gray-600">
              <div className="py-4 px-4 flex justify-between">
                <h1>List of Notes</h1>
                <button onClick={() => setShow((oldValue) => !oldValue)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
              <div className={show ? "block px-4 pb-2" : "hidden"}>
                <AddNoteForm hideForm={setShow} />
              </div>
              <div>
                <NoteList />
              </div>
            </aside>
          </div>
          <main className="w-2/3"></main>
        </div>
      </div>
    </div>
  );
};

export default withAuthenticator(NotesPage);
