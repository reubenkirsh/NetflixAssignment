import {render, screen, cleanup} from "@testing-library/react"

import BothLists from "./BothLists"
afterEach(()=>{
  cleanup()
})
test("testing BothLists renders properly", ()=>{

  render(<BothLists />);
  const bothListsElement= screen.getByTestId("bothLists");
  const myListElement = screen.getByTestId("myList");
  const myListDisplayBottomElement = screen.getByTestId("myListDisplayBottom");
  const myRecommendationsElement = screen.getByTestId("myRecommendationsList");
  expect(bothListsElement).toBeInTheDocument();
  expect(bothListsElement).toHaveTextContent("Sample Netflix User List And Recommendations");
  expect(myListElement).toBeInTheDocument();
  expect(myRecommendationsElement).toBeInTheDocument();
  expect(myListDisplayBottomElement).toBeInTheDocument();

})