import fakeAPI from "../API/fakeAPI";
import MyList from "./MyList";
import MyRecommendationList from "./MyRecommendationList";
import ListOfLikedMovies from "./ListOfLikedMovies";
import { useState } from "react";
export default function AllLists() {
  const apiDataFetch = fakeAPI();
  const [highestState, setHighestState] = useState(apiDataFetch);
  return (
    <div className="AllLists" data-testid={"AllLists"}>
      <h1 className={"titleWriting"}>My List And Recommendations</h1>
      <MyList setHighestState={setHighestState} highestState={highestState} />

      <MyRecommendationList
        setHighestState={setHighestState}
        highestState={highestState}
      />

      <ListOfLikedMovies highestState={highestState} />
    </div>
  );
}
