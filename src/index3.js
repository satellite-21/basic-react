// inline styling for react elements
import React from "react";
import ReactDOM from "react-dom";

//we have to create a javascript object and place the value inside a string 
// style = {{color: "red"}}

//we pass them as javascript objects 

// ReactDOM.render(<h1 style={{color: "red"}}>Hello World!</h1>, document.getElementById("root"))

// or we can do it using javascripts objects and using them as value 

const customStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid black",
};

customStyle.color = "green";

ReactDOM.render(<h1 style={customStyle}>Hello World!</h1>, document.getElementById("root"))
