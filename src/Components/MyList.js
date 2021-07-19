
import MyListMovie from "./MyListMovie"
function MyList(props){

  const mappedItems = props.highestState.mylist.map(ele => {
  return ( 
    <MyListMovie key ={ele.id} id ={ele.id} title= {ele.title} img= {ele.img} highestState ={props.highestState}  setHighestState ={props.setHighestState}></MyListMovie>
          )
   })
   console.log(mappedItems)
  return (<div data-testid = {"myList"} className ={"myList"}><h1>My List</h1><div className ={"myListContainer"}>{mappedItems.length === 0 ?  <h1 className ={"myList"} data-testid = {"myListEmpty"}>You Have No Movies In My List</h1> : mappedItems  }</div></div>)
}
export default MyList