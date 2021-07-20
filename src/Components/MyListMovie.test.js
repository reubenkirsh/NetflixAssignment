import { render, screen, cleanup } from "@testing-library/react";
import MyListMovie from "./MyListMovie";
import fakeAPI from "../API/fakeAPI";
afterEach(() => {
  cleanup();
});
test("testing MyListMovie renders properly", () => {
  const propsTest = fakeAPI();
  render(<MyListMovie highestState={propsTest} />);
  const myListMovieElement = screen.getByTestId("myListMovieItem");
  expect(myListMovieElement).toBeInTheDocument();
});
