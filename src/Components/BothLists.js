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
    
      <MyList  setHighestState ={setHighestState} highestState ={highestState}/>
      <hr></hr>
      <MyRecommendationList setHighestState ={setHighestState} highestState ={highestState}/>
      <hr></hr>
      <MyListDisplayBottom highestState ={highestState}/>
    </div>
  )
}
