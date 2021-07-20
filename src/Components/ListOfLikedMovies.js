import React from "react";

export default function ListOfLikedMovies(props) {
  const mappedListOfLikedMovies = props.highestState.mylist.map((ele) => (
    <h3 className={"movieTitle"} key={ele.id + 0}>
      {ele.title}
    </h3>
  ));
  return (
    <div data-testid={"listOfLikedMovies"} className={"listOfLikedMovies"}>
      <h1>My List of Movie Titles</h1>
      {mappedListOfLikedMovies}
    </div>
  );
}
