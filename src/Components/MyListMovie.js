import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function MyListMovie(props) {
  const [onMouseEntering, setOnMouseEntering] = useState(false);
  const { id, setHighestState, highestState } = props;

  function deleteMovie(event) {
    const updatedMyList = highestState.mylist.filter((ele) => ele.id !== id);
    const updatedMyListObject = { mylist: updatedMyList };
    const recommendations = highestState.recommendations;

    setHighestState({ ...updatedMyListObject, recommendations });
  }
  function mouseEntered(event) {
    setOnMouseEntering(true);
  }
  function mouseExited(event) {
    setOnMouseEntering(false);
  }

  return (
    <div
      className={"myListMovieItem"}
      data-testid={"myListMovieItem"}
      id={"myList" + props.id}
      key={"myList" + props.id}
      onMouseLeave={mouseExited}
    >
      <h3 className={"movieTitle"}>{props.title}</h3>
      <img
        alt={"moviePictureMyList" + props.id}
        id={"myListImg" + props.id}
        src={props.img}
        onMouseEnter={mouseEntered}
      />
      <br></br>
      {onMouseEntering ? (
        <div className="d-flex justify-content-center">
          <Button
            variant="outline-danger"
            className={"buttonS"}
            size="lg"
            onClick={() => {
              deleteMovie();
            }}
          >
            Delete Movie
          </Button>
        </div>
      ) : null}
    </div>
  );
}
