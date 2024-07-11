import React from "react";
import ReactDOM from "react-dom";
// --------- inserting element dynamically to the html through javascript-------
//     let elem= document.createElement("h1")
//    elem.innerHTML="M"
//     let root=document.getElementById("root")
//     root.appendChild(elem)

// --------- inserting element dynamically to the html through react-------
// const heading=React.createElement("h1",{id:"heading"},"i'm heading")
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

// --------- inserting nested element dynamically to the html through react-------
// <div id="parent">
//     <div id="child">
//         <h1>i'm heading</h1>
//     </div>
// </div>

// const heading = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//       "div",
//       { id: "child" },
//       React.createElement("h1", { id: "heading" }, "i'm heading")
//     )
//   );
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(heading);
// --------- inserting sibling elements dynamically to the html through react-------
// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("h1", { id: "child" }, "i'm h1"),
//   React.createElement("h2", { id: "heading2" }, "i'm heading2"),
// ]);
// //   );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// --------- inserting nested elements more complex dynamically to the html through react-------
// <div id="parent">
//     <div id="child">
//         <h1>i'm heading</h1>
// <h2>i'm heading</h2>
//     </div>
// <div id="child2">
//         <h1>i'm heading</h1>
// <h2>i'm heading</h2>
//     </div>
// </div>
console.log("mujahid");
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "i'm heading11"),
    React.createElement("h2", {}, "i'm heading12"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i'm heading21"),
    React.createElement("h2", {}, "i'm heading22"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
