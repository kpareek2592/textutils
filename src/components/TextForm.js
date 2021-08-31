import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        setText(text.toUpperCase())
    }

    const handleLowClick = () => {
      setText(text.toLowerCase());
    };

    // const handleTextAreaClick = () => {
    //   setText("");
    // };

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
      <>
        <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              //onClick={handleTextAreaClick}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLowClick}>
            Convert to Lowercase
          </button>
        </div>
        <div className="container my-3">
          <h2>Your text summary</h2>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </>
    );
}
