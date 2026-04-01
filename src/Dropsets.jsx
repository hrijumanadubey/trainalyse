import React from "react";
import { useState } from "react";

function Dropsets({ exerciseType }) {
  const [weight, setWeight] = useState(""); //state for setting weight with which you did te exercise
  const [reps, setReps] = useState(""); //state for setting reps you did in the exercise
  const [minutes, setMinutes] = useState(""); //state for entering minutes for which you did the exercise like plank for eg
  const [seconds, setSeconds] = useState(""); //state for entering seconds for which you did the exercise

  const id = React.useId(); // for id purposes only

  return (
    <div>
      {/*this is the logic for the different exercise types */}
      {exerciseType === "weightsAndReps" && (
        <>
          <input
            type="number"
            placeholder="enter Weight"
            id={id + "-weight"}
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="enter Reps"
            id={id + "-reps"}
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
            id={id + "-minutes"}
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
            id={id + "-seconds"}
            value={seconds}
            onChange={(e) => {
              setSeconds(e.target.value);
            }}
          />
          <label>{seconds} : Seconds</label>
        </>
      )}
    </div>
  );
}

export default Dropsets;
