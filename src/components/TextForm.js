import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!", "success");
  };
  
  
  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };

  const handleFindReplace = () => {
    if (find.trim() === "") {
      props.showAlert("Find text cannot be empty!", "warning");
      return;
    }
    let newText = text.replaceAll(find, replace);
    setText(newText);
    props.showAlert("Text replaced successfully!", "success");
  };

  const handleChange = (event) => {
    setText(event.target.value); // Update the state as the user types
  };

  const countWords = (str) => {
    return str.trim().split(/\s+/).filter((word) => word.length > 0).length;
  };

  const countLines = (str) => {
    return str.split(/\r?\n/).filter((line) => line.trim().length > 0).length;
  };

  const [text, setText] = useState("");
  const [find, setFind] = useState(""); // Input for "Find"
  const [replace, setReplace] = useState(""); // Input for "Replace"

  return (
    <>
      <div className="container my-4">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <label htmlFor="textArea" className="form-label">
            Enter your text below
          </label>
          <textarea
            className="form-control"
            id="textArea"
            rows="8"
            value={text}
            onChange={handleChange}
            placeholder="Type something..."
          ></textarea>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control my-2"
            placeholder="Find text"
            value={find}
            onChange={(e) => setFind(e.target.value)} // Update "Find" input
          />
          <input
            type="text"
            className="form-control my-2"
            placeholder="Replace text"
            value={replace}
            onChange={(e) => setReplace(e.target.value)} // Update "Replace" input
          />
          </div>

        <button disabled={text.length===0} className="btn btn-secondary btn-sm mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-secondary btn-sm mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-danger btn-sm mx-1 my-1" onClick={handleClear}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-success btn-sm mx-1 my-1" onClick={handleCopyClick}>
            Copy to Clipboard
        </button>
        <button disabled={text.length===0} className="btn btn-warning btn-sm mx-1 my-1" onClick={handleExtraSpaces}>
            Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-info mx-1" onClick={handleFindReplace}>
            Find & Replace
        </button>
      </div>

      <div className="container my-4">
        <h3>Text Summary</h3>
        <p>
          <b>Characters:</b> {text.length}
        </p>
        <p>
          <b>Words:</b> {countWords(text)}
        </p>
        <p>
          <b>Lines:</b> {countLines(text)}
        </p>
        <p>
          <b>Preview :</b> {text.length>0?text:"Enter the text above to preview"}
        </p>
      </div>
    </>
  );
}
