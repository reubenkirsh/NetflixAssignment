
import MyRecommendationListMovies from "./MyRecommendationListMovies"
function MyRecommendationList(props){
 
  const mappedItems = props.highestState.recommendations.map(ele => {
  return ( 
    <MyRecommendationListMovies 
    key = {ele.id} id ={ele.id} title= {ele.title} img= {ele.img} 
    highestState ={props.highestState} setHighestState = {props.setHighestState}>
    </MyRecommendationListMovies>
          )
   })
  return (<div className ={"myRecommendations"}><h1>My Recommendations</h1><div className ={"myRecommendationsContainer"}>{mappedItems}</div></div>)
}
export default MyRecommendationList