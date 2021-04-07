import React from 'react'
import { useContext } from 'react'
import {NotesContext} from '../store'


const FolderList = () => {
    const {state, dispatch} = useContext(NotesContext)
    
    const changeCurrentId = (id) => {
      console.log(id)
      dispatch({type: 'SET_CURRENT_ID', payload: {id}})
    }

    return (
      <>
        <ul className="flex flex-col gap-2">
          {state.folders.map((folder) => (
            <li 
              key={folder.id} 
              onClick={() => changeCurrentId(folder.id)}
              className="py-2 hover:bg-gray-600 cursor-pointer">
              <h2 className="pl-4">{folder.title}</h2>
            </li>
          ))}
        </ul>
      </>
    );
}

export default FolderList
