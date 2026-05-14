import React from "react";
import { useState } from "react";

function Dropsets({ exerciseType, initialData }) {
  const [weight, setWeight] = useState(initialData?.weight ?? ""); // pre-fill weight if data was passed
  const [reps, setReps] = useState(initialData?.reps ?? ""); // pre-fill reps if data was passed
  const [minutes, setMinutes] = useState(initialData?.minutes ?? ""); // pre-fill minutes if data was passed
  const [seconds, setSeconds] = useState(initialData?.seconds ?? ""); // pre-fill seconds if data was passed

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
      {exerciseType === "bodyWeight" && (
        <input
          type="number"
          placeholder="enter Reps"
          id={id + "-reps"}
          value={reps}
          onChange={(e) => {
            setReps(e.target.value);
          }}
        />
      )}
      {exerciseType === "assisted" && (
        <>
          <input
            type="number"
            placeholder="enter Assisted Weight"
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
    </div>
  );
}

export default Dropsets;
