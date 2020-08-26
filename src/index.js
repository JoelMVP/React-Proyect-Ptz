// const element = document.createElement("h1");
// element.innerText = "Hello, Bienvenido";

// const container = document.getElementById("root");

// container.appendChild(element);

//Utilizando React
import React from "react";
import ReactDOM from "react-dom";

// import "mdbootstrap/css/mdb.css";
import "mdbootstrap/css/bootstrap.css";
import "./global.css";
import App from "./components/App";
// const name = "Joel";
// -- jsx --
// const element = <h1>Hola, Bienvenido</h1>;
// const element = <h1>Hola soy {name}</h1>;

//-- React.createElement --
// const element = React.createElement(
//   "a",
//   { href: "https://joelmendozap.me" },
//   `Hola soy un link de ${name}`
// );

// const element = (
//   <div>
//     <h1>Hola soy {name}</h1>
//     <p>Soy ingeniero Frontend</p>
//   </div>
// );

const container = document.getElementById("root");

// ReactDOM.render(__que__,__donde__)
// ReactDOM.render(<BadgeNew />, container);
ReactDOM.render(<App />, container);
