import React from "react";
import ReactDOM from "react-dom/client";

const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am a h1 tag"),
        React.createElement("h2",{},"I am a h2 tag"),
    ])
])
console.log(parent);

// this above code gives the exact output of Html code what is written in html above. If you want to write nested so write like this 
const heading = React.createElement("h1",
{id:"heading"},"Hello World From React");
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(parent);
root.render(heading);

