import React, {useState} from 'react'
export default function MyListMovie(props) {
  const [onMouseEntering, setOnMouseEntering] = useState(false)
  const { id, setHighestState, highestState} = props
  
  function deleteMovie(event){
    const updatedMyList = highestState.mylist.filter(ele => ele.id !== id )
    const updatedMyListObject = {mylist: updatedMyList}
    const recommendations = highestState.recommendations
    
    const newState = {...updatedMyListObject, recommendations}
    setHighestState(newState)
  }
  function mouseEntered(event){setOnMouseEntering(true)}
 
  return (
    
    <div className = {"container"} key = {props.id}>
      <h2>{props.title}</h2>
      <img alt = {"movie_picture"}id ={props.id}src ={props.img} onMouseEnter = {mouseEntered} />
      
      {onMouseEntering ? <button className = {"btn"} onClick = {()=>{deleteMovie()}}>delete movie</button>: null}
      <hr></hr>
    </div>
  )
}
