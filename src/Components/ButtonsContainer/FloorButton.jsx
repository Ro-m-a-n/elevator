const FloorButton = (props) => {
  return (
    <button
      onClick={() => {
        props.setFloor(props.floor);
      }}
    >
      {props.floor }
    </button>
  );
};
export default FloorButton ;