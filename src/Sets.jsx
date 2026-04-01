import React from "react";
import Dropsets from "./Dropsets";
import { useState } from "react";

function Sets({ num }) {
  const [exerciseType, setExerciseType] = useState("");
  const [dropSets, setDropSets] = useState([]);
  const id = React.useId();

  function handleDropSets() {
    const updatedDropSets = [...dropSets, { id: id + "-" + dropSets.length }];
    setDropSets(updatedDropSets);
  }

  return (
    <>
      <p>Set {num}:</p>

      {/*this is the section where the user selects the type of exercise */}
      <select
        value={exerciseType}
        id={id}
        onChange={(e) => {
          setExerciseType(e.target.value);
        }}
      >
        <option value="" disabled>
          Select a Type
        </option>
        <option value="weightsAndReps">Weights and Reps</option>
        <option value="duration">Duration</option>
      </select>
      <br />
      <Dropsets exerciseType={exerciseType} />
      <br />
      {dropSets.map((set, index) => (
        <Dropsets key={set.id} exerciseType={exerciseType} />
      ))}
      <br />
      <button onClick={handleDropSets}>+ for drop sets</button>
    </>
  );
}

export default Sets;
