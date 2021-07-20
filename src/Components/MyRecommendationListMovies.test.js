import { render, screen, cleanup } from "@testing-library/react";
import MyRecommendationListMovie from "./MyRecommendationListMovie";
import fakeAPI from "../API/fakeAPI";
afterEach(() => {
  cleanup();
});
test("testing MyRecommendationList renders properly", () => {
  const propsTest = fakeAPI();
  render(<MyRecommendationListMovie highestState={propsTest} />);
  const myListMovieElement = screen.getByTestId("myRecommendationListItem");
  expect(myListMovieElement).toBeInTheDocument();
});
