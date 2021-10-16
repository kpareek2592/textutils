import React, { useState } from 'react'

export default function TextForm(props) {
    var data = null;
    const [text, setText] = useState('');

    const handleUpClick = () => {
      setText(text.toUpperCase());
      text && props.showAlert("Converted to UpperCase", "success");
    };

    const handleLowClick = () => {
      setText(text.toLowerCase());
      text && props.showAlert("Converted to LowerCase", "success");
    };

    const handleTrimTextClick = () => {
      let newText = text.replace(/\s+/g, " ").trim();
      setText(newText);
    };

    const handleClearTextAreaClick = () => {
      setText("");
    };

    const handleOnChange = (event) => {
      setText(event.target.value);
    };

    return (
      <>
        <div
          className="container"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
              style={{
                backgroundColor: props.mode === "dark" ? "gray" : "white",
                color: props.mode === "dark" ? "white" : "#042743",
              }}
            ></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLowClick}>
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={handleClearTextAreaClick}
          >
            Clear Text
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={handleTrimTextClick}
          >
            Trim Text
          </button>
        </div>
        <div
          className="container my-3"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          <h2>Your text summary</h2>
          <p>
            {text.length > 0 ? text.split(" ").length : 0} words and{" "}
            {text.length} characters
          </p>
          <p>{text.length > 0 ? 0.008 * text.split(" ").length : 0} minutes read</p>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter something in textbox above to preview here"}
          </p>
        </div>
      </>
    );
}
