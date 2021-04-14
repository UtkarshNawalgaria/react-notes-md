import React, { useState } from 'react'
import SimpleMDE from 'react-simplemde-editor'
import "easymde/dist/easymde.min.css";

const MarkdownEditor = ({ note }) => {

    const [text, setText] = useState(note.content)
    console.log(text)
    function handleChange(value) {
        setText(value)
    }

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
