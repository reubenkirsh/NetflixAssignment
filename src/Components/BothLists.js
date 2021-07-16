import fakeAPI from "../API/fakeAPI"
import MyList from "./MyList"
import MyRecommendationList from "./MyRecommendationList"
import MyListDisplayBottom from "./MyListDisplayBottom"
import {useState} from "react"
export default function BothLists() {
  const apiDataFetch = fakeAPI()
  const [highestState, setHighestState] = useState(apiDataFetch)

 
  return (
    <div>
      <h1>My List</h1>
      <MyList  setHighestState ={setHighestState} highestState ={highestState}/>
      <h1>My Recommendations</h1>
      <MyRecommendationList setHighestState ={setHighestState} highestState ={highestState}/>
      <h1>MyList of Movie Titles</h1>
      <MyListDisplayBottom highestState ={highestState}/>
    </div>
  )
}
