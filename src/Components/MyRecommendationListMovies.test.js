import { render, screen, cleanup } from "@testing-library/react";
import MyRecommendationListMovies from "./MyRecommendationListMovies";
import fakeAPI from "../API/fakeAPI";
afterEach(() => {
  cleanup();
});
test("testing MyRecommendationList renders properly", () => {
  const propsTest = fakeAPI();
  render(<MyRecommendationListMovies highestState={propsTest} />);
  const myListMovieElement = screen.getByTestId("myRecommendationListMovies");
  expect(myListMovieElement).toBeInTheDocument();
});

test("testing MyRecommendationList images render properly", () => {
  const propsTest = fakeAPI();
  render(<MyRecommendationListMovies highestState={propsTest} />);
  const imgAlt = screen.getByAltText("movie_picture");
  expect(imgAlt).toBeInTheDocument();
});
