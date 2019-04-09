import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "react-testing-library";
import App from "./App";

describe("</App>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //how can I write this if I were using the library instead of manually rendeirng things to DOM
  //These are both testing the same things

  it("renders succesfully", () => {
    render(<App />);
  });

  it("renders Hello World", () => {
    // const helpers = render(<App />);
    // console.log("helpers", helpers);

    const { getByText, queryByText } = render(<App />);
    //use getByText to find something on page- if you use getBy and w/e you're looking for in the DOM isnt there, it will auto fail test for you.
    //if you dont about case sensitivity or !- then make it a regex
    // getByText(/hello world/i);
    // queryByText(/hello world/i);

    expect(queryByText(/hello world/i)).not.toBeNull();
  });

  it("greets the team", () => {
    //render component & grba getbyText - use getbytext t find button. Click on button. Check, after I click on button, do I have Hello Web 17 in my UI. If not case, code is broken.
    const { getByText } = render(<App />);
    //grab the element button, now I can click on it
    const button = getByText(/greet/i);

    fireEvent.click(button);
    getByText(/Hello Web 17/i);

    const byeButton = getByText(/bye/i);
    fireEvent.click(byeButton);
    getByText(/Bye Web 17/i);
  });
});
