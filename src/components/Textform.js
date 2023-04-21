import React, { useState } from "react";

function Textform(props) {
  const upperhandleClick = () => {
    //console.log("upperCase was clicked");
    setText(text.toUpperCase());
    props.showAlert("Text has been converted into upperCase", "success");
  };
  const lowerhandleClick = () => {
    //console.log("lowerCase was clicked");
    setText(text.toLowerCase());
    props.showAlert("Text has been converted into lowerCase", "success");
  };
  const copyhandleClick = () => {
    //console.log("copytext was clicked");
    var text = document.getElementById("myTextbox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been Copied", "success");

  };
  const removeExtraSpacehandeClick = () => {
    //console.log("removeExtraSpace was clicked");
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Space has been removed", "success");
  };
  const clearhandleClick = () => {
    //console.log("Clear text was clicked");
    setText("");
    props.showAlert("Text has been cleared from Text box", "success");
  };
  const clearhandleClick1 = () => {
    //console.log("Clear text was clicked");
    setQuery("");
    props.showAlert("Text has been cleared from Search box", "success");
  };
  const searchhandleClick = () => {
    console.log("Search word was clicked");
    let newtext = text.split(/[ ,]+/);
    let count = 0;
    for (let i = 0; i < newtext.length; i++) {
      if (newtext[i] === query) {
        count++;
      }
    }
    if (count === 0) {
      props.showAlert("No Word Found", "success");
    }
    var counter = document.getElementById("counter");
    counter.innerHTML = count + " words found";
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const handleOnChange1 = (event) => {
    console.log("on change");
    setQuery(event.target.value);
  };

  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <div className="mb-3">
        <h1> {props.heading} </h1>
          
        <textarea className="form-control" id="myTextbox" style={{ backgroundColor: props.mode === "dark" ? "#1B4F72" : "white" ,color: props.mode === "dark" ? "white" : "black"}}
            value={text} placeholder="Enter the text here" onChange={handleOnChange} rows="8"></textarea>
          
      </div>
      </div>
     

      <div className="btn btn-primary mx-2" onClick={upperhandleClick}>upperCase</div>
      <div className="btn btn-primary mx-2" onClick={lowerhandleClick}>lowerCase</div>
      <div className="btn btn-primary mx-2" onClick={clearhandleClick}>Clear Text</div>
      <div className="btn btn-primary mx-2" onClick={copyhandleClick}>Copy Text</div>
      <div className="btn btn-primary mx-2" onClick={removeExtraSpacehandeClick}>Remove Extra Space</div>
      <input className="form-control  my-2"  placeholder="Search word" id="search-word-box" value={query} onChange={handleOnChange1} style={{ width: "250px",backgroundColor: props.mode === "dark" ? "#1B4F72" : "white" ,color: props.mode === "dark" ? "white" : "black" }}></input>
      <div className="btn btn-primary mx-2" onClick={searchhandleClick}> Search word </div>
      <div className="btn btn-primary mx-2" onClick={clearhandleClick1}>clear Text</div>
      

      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <div className="counter" id="counter" > 0 words found </div>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
      </div>
    </>
  );
}

export default  Textform