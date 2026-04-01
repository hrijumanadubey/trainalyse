import React from "react";
import Dropsets from "./Dropsets";
import { useState } from "react";

function Sets({ num }) {
  const [exerciseType, setExerciseType] = useState(""); // state for selecting the type of exercise
  const [dropSets, setDropSets] = useState([]); //state of array for storing drop sets
  const id = React.useId();

  // function to handle adding a new drop set
  function handleDropSets() {
    const updatedDropSets = [...dropSets, { id: id + "-" + dropSets.length }];
    setDropSets(updatedDropSets);
  }

  // function to handle removing a drop set
  function handleMinus() {
    if (dropSets.length > 0) {
      const updatedDropSets = dropSets.slice(0, -1);
      setDropSets(updatedDropSets);
    }
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
      {/* this is the drop set part rendered which will be shown initially on the first render */}
      <Dropsets exerciseType={exerciseType} />
      <br />
      {/*this is the part where dropsets are rendered by mapping to the dropsets array */}
      {dropSets.map((set, index) => (
        <Dropsets key={set.id} exerciseType={exerciseType} />
      ))}
      <br />
      {/* this is the button to add a new drop set */}
      <button onClick={handleDropSets}>+ for drop sets</button>
      {/* this is the button to remove a drop set, only shown if there are drop sets */}
      {dropSets.length > 0 && (
        <button onClick={handleMinus}>- for drop sets</button>
      )}
    </>
  );
}

export default Sets;
