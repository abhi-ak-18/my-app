import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=> {
        console.log("Uppercase was clicked");
        let newText= text.toUpperCase();
        setText(newText);
    }

    const handleLoClick=()=> {
        console.log("Lowercase was clicked");
        let newText= text.toLowerCase();
        setText(newText);
    }

    const handleOnChange=(event)=> {
        console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
  return (
      <>
    <div className='container'>

        <h1>{props.heading} </h1>
        <div className="mb-1">
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="mybox" rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>

    </div>
    <div className="container my-3">
        <h2>Your text summary :</h2>
        <p>Words= {text.split(" ").length}  and Characters= {text.length} </p>
        <p>Minutes taken to read = {0.008 * text.split(" ").length} minute(s) </p>


    </div>
    </>
  )
}
