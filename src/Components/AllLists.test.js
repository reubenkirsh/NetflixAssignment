import { render, screen, cleanup } from "@testing-library/react";

import AllLists from "./AllLists";
afterEach(() => {
  cleanup();
});
test("testing AllLists renders properly", () => {
  render(<AllLists />);
  const AllListsElement = screen.getByTestId("AllLists");
  const myListElement = screen.getByTestId("myList");
  const myListDisplayBottomElement = screen.getByTestId("listOfLikedMovies");
  const myRecommendationsElement = screen.getByTestId("myRecommendations");
  expect(AllListsElement).toBeInTheDocument();
  expect(AllListsElement).toHaveTextContent("My List And Recommendations");
  expect(myListElement).toBeInTheDocument();
  expect(myRecommendationsElement).toBeInTheDocument();
  expect(myListDisplayBottomElement).toBeInTheDocument();
});
