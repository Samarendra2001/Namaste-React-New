import React from "react";
import ReactDOM from "react-dom/client";

 const jsxheading = <h1 className = "heading">Namste React Using Jsx 🚀🚀</h1>//it is a react Element 
/* const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading); */
// React functional Components
//2 way of writting Functional Components both are Valid
const num = 10000;
const HeadingComponents =  () =>{
    return <h1 className="heading">NamsteReact 2</h1>
}
const HeadingComponents2 = ()=>(
    <>
    {jsxheading}       {/* React element is used in Components by only curly */}
    <h2>{num}</h2> {/* in that curly braces you can write any JavaScript Code and It will work */}
    {HeadingComponents()}  {/* At the ene of the day it is all javascript so we call function like this also */}
    <HeadingComponents></HeadingComponents> {/* these all three are same you can use it in whatever style */}
    <HeadingComponents />              {/* Component Composition it is like use another component in a component */}
    <h1 className="heading2">NamasteReact</h1>
    </>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponents2/>);
