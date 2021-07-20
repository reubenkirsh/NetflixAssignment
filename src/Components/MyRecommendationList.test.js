import { render, screen, cleanup } from "@testing-library/react";
import MyRecommendationList from "./MyRecommendationList";
import fakeAPI from "../API/fakeAPI";
afterEach(() => {
  cleanup();
});
test("testing MyRecommendationList with items renders properly", () => {
  const propsTest = fakeAPI();
  render(<MyRecommendationList highestState={propsTest} />);
  const myListElement = screen.getByTestId("myRecommendationsList");
  expect(myListElement).toBeInTheDocument();
});
