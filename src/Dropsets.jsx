import React from "react";
import { useState } from "react";

function Dropsets({ exerciseType }) {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const id = React.useId();

  return (
    <div>
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
