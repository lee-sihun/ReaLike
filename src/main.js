import createElement from "./vdom/createElements";
import render from "./vdom/render";

const vdom = createElement(
  "div",
  { id: "app" },
  createElement("h1", null, "Hello, Virtual DOM!"),
  createElement("p", null, "This is a simple implementation of a virtual DOM.")
);

const container = document.getElementById("root");
render(vdom, container);
