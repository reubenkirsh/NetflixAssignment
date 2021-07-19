import React from 'react'

export default function MyListDisplayBottom(props) {
  const mappedMyListBottom = props.highestState.mylist.map(ele => <h2 key ={ele.id+0}>{ele.title}</h2>)
  return (
   
    <div data-testid = {"myListDisplayBottom"} className ={"container"}>
       <h1>MyList of Movie Titles</h1>
      {mappedMyListBottom}
    </div>
  )
}
