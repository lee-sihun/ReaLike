// import createElement from "./vdom/createElements";
import render from "./vdom/render";

const vdom = (
  <div id="app">
    <h1>Hello, Virtual DOM with JSX!</h1>
    <p>This is JSX syntax working with our custom virtual DOM.</p>
  </div>
);

const container = document.getElementById("root");
render(vdom, container);