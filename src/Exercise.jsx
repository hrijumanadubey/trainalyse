import React from "react";
import { useState } from "react";
import Sets from "./Sets";

function Exercise({ number }) {
  const [exerciseType, setExerciseType] = useState("weightsAndReps"); // state for selecting the type of exercise
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
      {/* this is the first set rendered initially on the first render */}
      <Sets num={1} exerciseType={exerciseType} />
      <br />
      {sets.map((set, index) => (
        <Sets key={set.id} num={index + 2} exerciseType={exerciseType} />
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
