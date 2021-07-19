import {render, screen, cleanup} from "@testing-library/react";
import MyList from "./MyList.js"
import fakeAPI from "../API/fakeAPI"
afterEach(()=>{
  cleanup()
});
test("testing MyList with items renders properly", ()=>{
  const propsTest = fakeAPI()
  render(<MyList highestState = {propsTest}/>);
  const myListElement = screen.getByTestId("myList");
  expect(myListElement).toBeInTheDocument();
  

})

test("testing MyList without items renders properly", ()=>{
  const propsTest = {mylist: []}
  render(<MyList highestState = {propsTest}/>);
  const myListElementEmpty = screen.getByTestId("myListEmpty");
  expect(myListElementEmpty).toBeInTheDocument();

})