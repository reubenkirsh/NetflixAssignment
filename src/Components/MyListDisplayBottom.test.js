import { render, screen, cleanup } from "@testing-library/react";
import MyListDisplayBottom from "./MyListDisplayBottom";
import fakeAPI from "../API/fakeAPI";
afterEach(() => {
  cleanup();
});
test("testing MyListDisplayBottom with items renders properly", () => {
  const propsTest = fakeAPI();
  render(<MyListDisplayBottom highestState={propsTest} />);
  const myListElement = screen.getByTestId("myListDisplayBottom");
  expect(myListElement).toBeInTheDocument();
});

test("testing MyListDisplayBottom renders correct text", () => {
  const propsTest = fakeAPI();
  render(<MyListDisplayBottom highestState={propsTest} />);
  const myListDisplayBottomElement = screen.getByTestId("myListDisplayBottom");
  expect(myListDisplayBottomElement).toHaveTextContent(
    "MyList of Movie Titles"
  );
  expect(myListDisplayBottomElement).toHaveTextContent("Futurama");
  expect(myListDisplayBottomElement).toHaveTextContent("The Interview");
  expect(myListDisplayBottomElement).toHaveTextContent("Gilmore Girls");
});
