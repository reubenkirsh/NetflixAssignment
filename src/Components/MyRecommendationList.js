import MyRecommendationListMovies from "./MyRecommendationListMovie";
function MyRecommendationList(props) {
  const mappedItems = props.highestState.recommendations.map(
    (ele, count = 0) => {
      count += 1;
      return (
        <MyRecommendationListMovies
          key={"myRecommendation" + count}
          id={"myRecommendation" + count}
          uniqueIdentifier={ele.id}
          title={ele.title}
          img={ele.img}
          idNumber={count}
          highestState={props.highestState}
          setHighestState={props.setHighestState}
        ></MyRecommendationListMovies>
      );
    }
  );
  return (
    <div data-testid={"myRecommendations"} className={"myRecommendations"}>
      <h2>My Recommendations</h2>
      <div className={"myRecommendationsContainer"}>{mappedItems}</div>
    </div>
  );
}
export default MyRecommendationList;
