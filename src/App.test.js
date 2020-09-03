import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import Root from "./Root";
import App from "./App";
import AncestorEnter from "components/FormComponents/AncestorEnter";
import Tree from "components/TreeComponents/Tree";

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Root>
      <App />
    </Root>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows the AncestorEnter component", () => {
  expect(wrapped.find(AncestorEnter));
});

it("shows the Tree component", () => {
  expect(wrapped.find(Tree));
});
