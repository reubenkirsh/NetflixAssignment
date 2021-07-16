import fakeAPI from "../API/fakeAPI"
import MyList from "./MyList"
import MyRecommendationList from "./MyRecommendationList"
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
    </div>
  )
}
