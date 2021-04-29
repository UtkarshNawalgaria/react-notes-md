import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SimpleMDE from 'react-simplemde-editor'
import "easymde/dist/easymde.min.css";

const MarkdownEditor = () => {

    const {note} = useSelector(state => state.notes)

    const [text, setText] = useState(() => {
      return note.content
    })

    function handleChange(value) {
        setText(value)
    }

    useEffect(() => {
      setText(note.content)
    }, [note.content])

    return (
      <div>
        <SimpleMDE
          id="editor"
          onChange={handleChange}
          value={text}
          options={{
            autofocus: true,
            spellChecker: false,
          }}
          className={"w-full"}
        />
        <div className="text-white">
          {text}
        </div>
      </div>
    );
}

export default MarkdownEditor
