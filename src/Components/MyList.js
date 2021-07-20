import MyListMovie from "./MyListMovie";
function MyList(props) {
  const mappedItems = props.highestState.mylist.map((ele, count = 0) => {
    count += 1;
    return (
      <MyListMovie
        key={count}
        id={ele.id}
        title={ele.title}
        img={ele.img}
        highestState={props.highestState}
        setHighestState={props.setHighestState}
      ></MyListMovie>
    );
  });

  return (
    <div data-testid={"myList"} className={"myList"}>
      <h1>My List</h1>
      <div className={"myListContainer"}>
        {mappedItems.length === 0 ? (
          <h2 className={"myList"} data-testid={"myListEmpty"}>
            You Have No Movies In My List
          </h2>
        ) : (
          mappedItems
        )}
      </div>
    </div>
  );
}
export default MyList;
