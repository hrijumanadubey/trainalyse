import React from "react";
import { useState } from "react";
import Sets from "./Sets";

function Exercise({ number }) {
  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState([]);
  const id = React.useId();

  function handleAddSets() {
    setSets([...sets, { id: id + "-" + sets.length }]);
  }

  return (
    <>
      <h3>Exercise {number}</h3>
      <input
        type="text"
        id={id + "-exerciseName"}
        value={exerciseName}
        onChange={(e) => setExerciseName(e.target.value)}
      />
      <br />
      <Sets num={1} />
      <br />
      {sets.map((set, index) => (
        <Sets key={set.id} num={index + 2} />
      ))}
      <br />
      <button onClick={handleAddSets}>+ for Sets</button>
    </>
  );
}

export default Exercise;
