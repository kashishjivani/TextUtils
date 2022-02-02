import {React, useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");

    const onChange = (e) => {   
        setText(e.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);      
        props.showAlert("The text has been converted to uperrcase!", "success ");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);      
        props.showAlert("The text has been converted to lowercase!", "success ");
    }

    const handleClearClick = () => {
        let newText ="";
        setText(newText);      
        props.showAlert("The text has been cleared!", "success ");
    } 

return( 
    <>
        <div className="container" style={{color: props.mode === 'dark'? 'white': 'black'}}>
        <h1 style={{color: props.mode === 'dark'? 'white': 'black'}}> {props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" placeholder='Enter text here' style={{backgroundColor: props.mode === 'dark'? 'grey': 'white',
        color: props.mode === 'dark'? 'white': 'black'}} value ={text} id="myBox" onChange={onChange} rows="8"></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleClearClick}>Clear Text</button>

        </div>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'? 'white': 'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words {text.length} Characters</p>
            <p>{0.08 * text.split(" ").length} Minutes to read</p>
            <h2>{text}</h2>
        </div>

    </>
    )
}
