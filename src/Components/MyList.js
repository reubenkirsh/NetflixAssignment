
import MyListMovie from "./MyListMovie"
function MyList(props){

  const mappedItems = props.highestState.mylist.map(ele => {
  return ( 
    <MyListMovie key ={ele.id} id ={ele.id} title= {ele.title} img= {ele.img} highestState ={props.highestState}  setHighestState ={props.setHighestState}></MyListMovie>
          )
   })
  return (<div className ={"myList"}><h1>My List</h1><div className ={"myListContainer"}>{mappedItems}</div></div>)
}
export default MyList