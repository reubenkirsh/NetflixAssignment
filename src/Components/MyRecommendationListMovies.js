import React, {useState} from 'react'


export default function MyRecommendationListMovies(props) {
  const [onMouseEntering, setOnMouseEntering] = useState(false)
  const { highestState, setHighestState,} = props
  function addMovie(event){
    const mylist= highestState.mylist
    const recommendations = highestState.recommendations;
    let movie;
    for(let i = 0; i<recommendations.length; i++){
      if (recommendations[i].id === props.id){
        movie = recommendations[i]
      }
    }
    let isAlreadyAdded = false
    for(let i =0; i<mylist.length; i++){
      if(mylist[i] === movie){
        isAlreadyAdded = true
       
      }
    }
    if(!isAlreadyAdded){mylist.push(movie)}
   
    
    const newState = {mylist:mylist, recommendations : recommendations }
    console.log(newState)
    setHighestState(newState)

  }
  function mouseEntered(event){setOnMouseEntering(true)}
 
  return (
    
    <div className = {"row"} key = {props.id}>
      <h2>{props.title}</h2>
      <img  alt = {"movie_picture"} id ={props.id}src ={props.img} onMouseEnter = {mouseEntered} />
      <hr></hr>
      {onMouseEntering ? <button className = {"btn"} onClick = {()=>{addMovie()}}>Add Movie To Favorites</button>: null}
     
    </div>
  )
}