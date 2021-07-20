import React from "react";

export default function MyListDisplayBottom(props) {
  const mappedMyListBottom = props.highestState.mylist.map((ele) => (
    <h3 className={"movieTitle"} key={ele.id + 0}>
      {ele.title}
    </h3>
  ));
  return (
    <div data-testid={"myListDisplayBottom"} className={"myListDisplayBottom"}>
      <h1>My List of Movie Titles</h1>
      {mappedMyListBottom}
    </div>
  );
}
