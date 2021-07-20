import MyRecommendationListMovies from "./MyRecommendationListMovies";
function MyRecommendationList(props) {
  const mappedItems = props.highestState.recommendations.map(
    (ele, count = 0) => {
      count += 1;
      return (
        <MyRecommendationListMovies
          key={ele.id}
          id={ele.id}
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
    <div data-testid={"myRecommendationsList"} className={"myRecommendations"}>
      <h2>My Recommendations</h2>
      <div className={"myRecommendationsContainer"}>{mappedItems}</div>
    </div>
  );
}
export default MyRecommendationList;
