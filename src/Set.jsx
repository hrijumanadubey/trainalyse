import React from "react";
import { useState } from "react";

function Set() {
  const [weight, setWeight] = useState(""); //state for setting weight
  const [reps, setReps] = useState(""); //state for setting reps
  const [minutes, setMinutes] = useState("0"); //state for setting minutes
  const [seconds, setSeconds] = useState("0"); //state for setting seconds
  const [exerciseType, setExerciseType] = useState(""); //state for setting the type of exercise eg.weights and reps,duration or assisted etc
  const [showButton, setShowButton] = useState(false); // this state is used to show the + button after the user selects an exercise type
  const [dropSets, setDropSets] = useState([]); // this array state is for storing the amount of times a user clicks the + button for drop sets and it add just a '-' to the array

  {
    /*
   this function is for + button for the drop sets and it updates the dropsets array state
    */
  }
  function handleAddDropSets() {
    setDropSets([
      ...dropSets,
      { weight: "", reps: "", minutes: "0", seconds: "0" },
    ]);
  }

  {
    /*
   this function is for - button for the drop sets and it updates the dropsets array state
    */
  }
  function handleMinusDropSets() {
    setDropSets(dropSets.slice(0, -1));
  }

  return (
    <>
      <p>Set 1:</p>
      {/*this is the section where the user selects the type of exercise */}
      <select
        value={exerciseType}
        onChange={(e) => {
          setExerciseType(e.target.value);
          setMinutes("0");
          setSeconds("0");
          setWeight("");
          setReps("");
          setShowButton(true);
        }}
      >
        <option value="" disabled>
          Select a Type
        </option>
        <option value="weightsAndReps">Weights and Reps</option>
        <option value="duration">Duration</option>
      </select>
      <br />
      {/*this is the section where when you select the typen of exercis, it will render the first inputs which are not in the drop sets array */}
      <div key="first">
        {exerciseType === "weightsAndReps" && (
          <>
            <input
              type="number"
              placeholder="enter Weight"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="enter Reps"
              value={reps}
              onChange={(e) => {
                setReps(e.target.value);
              }}
            />
          </>
        )}
        {exerciseType === "duration" && (
          <>
            <input
              type="range"
              min="0"
              max="100"
              value={minutes}
              onChange={(e) => {
                setMinutes(e.target.value);
              }}
            />
            <label>{minutes} : Minutes</label>
            <br />
            <input
              type="range"
              min="0"
              max="59"
              value={seconds}
              onChange={(e) => {
                setSeconds(e.target.value);
              }}
            />
            <label>{seconds} : Seconds</label>
          </>
        )}
      </div>
      {/*this is the section where the drop sets are rendered */}
      {dropSets.map((set, index) => (
        <div key={index}>
          {exerciseType === "weightsAndReps" && (
            <>
              <input
                type="number"
                placeholder="enter Weight"
                value={set.weight}
                onChange={(e) => {
                  const updated = [...dropSets];
                  updated[index] = {
                    ...updated[index],
                    weight: e.target.value,
                  };
                  setDropSets(updated);
                }}
              />
              <input
                type="number"
                placeholder="enter Reps"
                value={set.reps}
                onChange={(e) => {
                  const updated = [...dropSets];
                  updated[index] = { ...updated[index], reps: e.target.value };
                  setDropSets(updated);
                }}
              />
            </>
          )}
          {exerciseType === "duration" && (
            <>
              <input
                type="range"
                min="0"
                max="100"
                value={set.minutes}
                onChange={(e) => {
                  const updated = [...dropSets];
                  updated[index] = {
                    ...updated[index],
                    minutes: e.target.value,
                  };
                  setDropSets(updated);
                }}
              />
              <label>{set.minutes} : Minutes</label>
              <br />
              <input
                type="range"
                min="0"
                max="59"
                value={set.seconds}
                onChange={(e) => {
                  const updated = [...dropSets];
                  updated[index] = {
                    ...updated[index],
                    seconds: e.target.value,
                  };
                  setDropSets(updated);
                }}
              />
              <label>{set.seconds} : Seconds</label>
            </>
          )}
        </div>
      ))}
      <br />
      {/* this is the section where the user can add or remove drop sets by clicking the + or - buttons */}
      {showButton && <button onClick={handleAddDropSets}>+</button>}
      {dropSets.length > 0 && <button onClick={handleMinusDropSets}>-</button>}
    </>
  );
}

export default Set;
