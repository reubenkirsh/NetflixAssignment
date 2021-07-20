import { render, screen, cleanup } from "@testing-library/react";
import ListOfLikedMovies from "./ListOfLikedMovies";
import fakeAPI from "../API/fakeAPI";
afterEach(() => {
  cleanup();
});
test("testing ListOfLikedMovies with items renders properly", () => {
  const propsTest = fakeAPI();
  render(<ListOfLikedMovies highestState={propsTest} />);
  const myListElement = screen.getByTestId("listOfLikedMovies");
  expect(myListElement).toBeInTheDocument();
});

test("testing ListOfLikedMovies renders correct text", () => {
  const propsTest = fakeAPI();
  render(<ListOfLikedMovies highestState={propsTest} />);
  const listOfLikedMoviesElement = screen.getByTestId("listOfLikedMovies");
  expect(listOfLikedMoviesElement).toHaveTextContent("My List of Movie Titles");
  expect(listOfLikedMoviesElement).toHaveTextContent("Futurama");
  expect(listOfLikedMoviesElement).toHaveTextContent("The Interview");
  expect(listOfLikedMoviesElement).toHaveTextContent("Gilmore Girls");
});
