import fakeAPI from "../API/fakeAPI";
import MyList from "./MyList";
import MyRecommendationList from "./MyRecommendationList";
import MyListDisplayBottom from "./MyListDisplayBottom";
import { useState } from "react";
export default function BothLists() {
  const apiDataFetch = fakeAPI();
  const [highestState, setHighestState] = useState(apiDataFetch);

  return (
    <div className="bothLists" data-testid={"bothLists"}>
      <h1 className={"titleWriting"}>My List And Recommendations</h1>
      <MyList setHighestState={setHighestState} highestState={highestState} />

      <MyRecommendationList
        setHighestState={setHighestState}
        highestState={highestState}
      />

      <MyListDisplayBottom highestState={highestState} />
    </div>
  );
}
