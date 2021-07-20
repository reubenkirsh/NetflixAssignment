import { render, screen, cleanup } from "@testing-library/react";
import MyListMovie from "./MyListMovie";
import fakeAPI from "../API/fakeAPI";
afterEach(() => {
  cleanup();
});
test("testing MyListMovie renders properly", () => {
  const propsTest = fakeAPI();
  render(<MyListMovie highestState={propsTest} />);
  const myListMovieElement = screen.getByTestId("myListMovie");
  expect(myListMovieElement).toBeInTheDocument();
});

test("testing MyListMovie images render properly", () => {
  const propsTest = fakeAPI();
  render(<MyListMovie highestState={propsTest} />);
  const imgAlt = screen.getByAltText("movie_picture");
  expect(imgAlt).toBeInTheDocument();
});
