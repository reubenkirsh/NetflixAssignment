import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function MyRecommendationListMovie(props) {
  const [onMouseEntering, setOnMouseEntering] = useState(false);
  const { highestState, setHighestState } = props;

  function addMovie(event) {
    const mylist = highestState.mylist;
    const recommendations = highestState.recommendations;
    let movie;
    for (let i = 0; i < recommendations.length; i++) {
      if (recommendations[i].id === props.uniqueIdentifier) {
        movie = recommendations[i];
      }
    }

    let isAlreadyAdded = false;
    for (let i = 0; i < mylist.length; i++) {
      if (mylist[i] === movie) {
        isAlreadyAdded = true;
      }
    }

    if (!isAlreadyAdded) {
      mylist.push(movie);
    }

    setHighestState({ ...highestState, recommendations });
  }
  function mouseEntered(event) {
    setOnMouseEntering(true);
  }
  function mouseExited(event) {
    setOnMouseEntering(false);
  }
  return (
    <div
      className={"myRecommendationsItem"}
      data-testid={"myRecommendationListItem"}
      id={"myRecommendations" + props.id}
      key={"myRecommendations" + props.id}
      onMouseLeave={mouseExited}
    >
      <h3 className={"movieTitle"}>{props.title}</h3>
      <img
        alt={"moviePictureMyRecommendation" + props.id}
        id={"myRecommendationImg" + props.id}
        src={props.img}
        onMouseEnter={mouseEntered}
      />
      <br></br>
      {onMouseEntering ? (
        <Button
          variant="outline-danger"
          onClick={() => {
            addMovie();
          }}
        >
          Favorite This Movie
        </Button>
      ) : null}
    </div>
  );
}
