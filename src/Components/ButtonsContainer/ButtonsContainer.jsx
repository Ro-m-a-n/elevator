import { motion } from "framer-motion";
import "../../App.css";
import FloorButton from './FloorButton';



const ButtonsContainer = (props) => {
    return (
        <motion.div animate={{height:props.floorsQuantity*100}} className={props.class}>
        {props.floorsQuantityArray.map((currentFloor) => {
          return (
            <FloorButton
              key={currentFloor}
              setFloor={props.setFloor}
              floor={currentFloor}
            />
          );
        })}
      </motion.div>
    );
  };
  export default ButtonsContainer ;