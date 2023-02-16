const FloorButton = (props) => {
  return (
    <button
      onClick={() => {
        props.setFloor(props.floor);
      }}
    >
      {`${props.floor+1}` }
    </button>
  );
};
export default FloorButton ;