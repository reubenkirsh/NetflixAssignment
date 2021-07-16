import React from 'react'

export default function MyListDisplayBottom(props) {
  const mappedMyListBottom = props.highestState.mylist.map(ele => <h2>{ele.title}</h2>)
  return (
   
    <div>
      {mappedMyListBottom}
    </div>
  )
}
