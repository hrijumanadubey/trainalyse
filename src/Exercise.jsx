import React from "react";
import { useState } from "react";
import Sets from "./Sets";

function Exercise({ number }) {
  const [exerciseName, setExerciseName] = useState(""); // state for entering the name of the exercise
  const [sets, setSets] = useState([]); // state of array for storing sets
  const id = React.useId();

  // function to add a set to the array of sets
  function handleAddSets() {
    setSets([...sets, { id: id + "-" + sets.length }]);
  }

  // function to remove a set from the array of sets
  function handleMinus() {
    if (sets.length > 0) {
      const updatedSets = sets.slice(0, -1);
      setSets(updatedSets);
    }
  }

  return (
    <>
      <h3>Exercise {number}</h3>
      {/* this is the input field for entering the name of the exercise */}
      <input
        type="text"
        id={id + "-exerciseName"}
        value={exerciseName}
        onChange={(e) => setExerciseName(e.target.value)}
      />
      <br />
      {/* this is the first set rendered initially on the first render */}
      <Sets num={1} />
      <br />
      {sets.map((set, index) => (
        <Sets key={set.id} num={index + 2} />
      ))}
      <br />
      {/* this is the button to add a new set */}
      <button onClick={handleAddSets}>+ for Sets</button>
      {/* this is the button to remove a set, only shown if there are sets */}
      {sets.length > 0 && <button onClick={handleMinus}>- for Sets</button>}
    </>
  );
}

export default Exercise;
