import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextBox(props) {
    const [text, setText] = useState("Dummy Text");
    const [textColor, setTextColor] = useState("#9400D3");
    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    };
    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    };
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared Text", "success");
    };
    const handleColorChangeClick = () => {
        let x = '';
        if (textColor === "#9400D3") {
            x = "#4B0082";
        }
        else if (textColor === "#4B0082") {
            x = "#0000FF";
        }
        else if (textColor === "#0000FF") {
            x = "#00FF00";
        }
        else if (textColor === "#00FF00") {
            x = "#FFFF00";
        }
        else if (textColor === "#FFFF00") {
            x = "#FF7F00";
        }
        else if (textColor === "#FF7F00") {
            x = "#FF0000";
        }
        else if (textColor === "#FF0000") {
            x = "#9400D3";
        }
        setTextColor(x);
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to Clipboard", "success");
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    let style1 = {
        fontWeight: "bold",
        color: textColor,
        fontSize: "20px",
        backgroundColor: props.mode === 'dark' ? '#343a40' : props.mode === 'success' ? '#20ac6b' : 'white'
    };
    const wordCount = (text)=>{
        let words = text.split(" ");
        let count = 0;
        for (let i = 0; i < words.length; i++) {
            if (words[i] !== "") {
                count += 1;
            }
        };
        return count;
    }
    return (
        <>
            <div className="container my-3" style={{backgroundColor: props.mode === 'dark' ? '#343a40' : props.mode === 'success' ? '#20ac6b' : 'white',color:props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={style1}></textarea>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy to clipboard</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleColorChangeClick}>Change colour</button>
            </div>
            <div className="container" style={{backgroundColor: props.mode === 'dark' ? '#343a40' : props.mode === 'success' ? '#20ac6b' : 'white',color:props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your Text Summary</h2>
                <p>{wordCount(text)} words and {text.length} characters</p>
                <p>{0.008 * wordCount(text)} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text===""?"Enter some text in the textbox to preview it here":text}</p>
            </div>
        </>
    )
}

TextBox.propTypes = {
    showAlert: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
}

TextBox.defaultProps = {
    showAlert: null,
    mode: 'light',
    heading: 'Enter Text Here',
}