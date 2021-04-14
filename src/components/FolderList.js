import { ArrowCircleRightIcon, FolderIcon } from "@heroicons/react/solid";
import React from "react";
import useNotes from "../store";

const FolderList = () => {
  const {
    state: { folders, currentFolderId },
    dispatch,
  } = useNotes();

  const handleClick = (id) => {
    dispatch({ type: "SET_CURRENT_FOLDER_ID", payload: { id } });
  };

  return (
    <>
      <ul className="flex flex-col gap-2">
        {folders.map((folder) => (
          <li
            key={folder.id}
            onClick={() => handleClick(folder.id)}
            className={
              "py-2 hover:bg-gray-600 cursor-pointer " +
              (currentFolderId === folder.id ? "bg-gray-600" : "")
            }
          >
            <div className="px-4 flex justify-items-center items-center justify-between">
              <div className="flex">
                <FolderIcon className="h-5 w-5" />
                <h2 className="pl-2">{folder.title}</h2>
              </div>
              <div>
                <ArrowCircleRightIcon
                  className={
                    "h-5 w-5 transform transition " +
                    (currentFolderId === folder.id ? "rotate-90 delay-75" : "")
                  }
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FolderList;
