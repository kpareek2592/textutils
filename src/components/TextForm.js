import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");

    const handleUpClick = () => {
        setText(text.toUpperCase())
    }

    const handleCountClick = () => {
      setText(text.length);
    };

    const handleTextAreaClick = () => {
        setText('')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onClick={handleTextAreaClick} onChange={handleOnChange} id="myBox" rows="8">
            
          </textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={handleCountClick}>Count Characters</button>
      </div>
    );
}
