import "./App.css";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ButtonsContainer from "./Components/ButtonsContainer/ButtonsContainer";

function App() {
  const [floor, setFloor] = useState(1);
  const [floorsQuantity, setFloorsQuantity] = useState(8);

  let createfloorsQuantityArray = () => {
    let floorsQuantityArray = [];
    for (let i = 1; i <= floorsQuantity; i++) {
      floorsQuantityArray.push(i);
    }
    return floorsQuantityArray;
  };
  let floorsQuantityArray = useMemo(
    () => createfloorsQuantityArray(),
    [floorsQuantity]
  );

  return (
    <div className="App">
      <div className="building-wrap">
        <motion.div
          animate={{ height: floorsQuantity * 100 + 40 }}
          className="lift-shaft"
        >
          <motion.div
            animate={{ y: 100 - floor * 100 }}
            transition={{ duration: 2 }}
            className="lift"
          >
            <ButtonsContainer
              floorsQuantityArray={floorsQuantityArray}
              setFloor={setFloor}
              floorsQuantity={floorsQuantity}
              class={"lift-button"}
            />
          </motion.div>
        </motion.div>
        <ButtonsContainer
          floorsQuantityArray={floorsQuantityArray}
          setFloor={setFloor}
          floorsQuantity={floorsQuantity}
          class={"floor-button"}
        />
      </div>

      <input
        type="range"
        min="2"
        max="8"
        defaultValue="4"
        list="floors"
        onChange={(value) => {
          setFloorsQuantity(+value.target.value);
          setFloor(1);
        }}
      />
      <datalist id="floors">
        <option value="2" label="2"></option>
        <option value="3" label="3"></option>
        <option value="4" label="4"></option>
        <option value="5" label="5"></option>
        <option value="6" label="6"></option>
        <option value="7" label="7"></option>
        <option value="8" label="8"></option>
      </datalist>
      <label>Floors quantity</label>
    </div>
  );
}

export default App;
