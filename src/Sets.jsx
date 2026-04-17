import React from "react";
import Dropsets from "./Dropsets";
import { useState } from "react";

function Sets({ num, exerciseType, initialData }) {
  const id = React.useId();
  const [dropSets, setDropSets] = useState(
    initialData?.dropsets?.length ? initialData.dropsets : [{ id: id + "-0", weight: "", reps: "", minutes: "", seconds: "" }] // pre-fill dropsets if data was passed, otherwise start with one default
  );

  // function to handle adding a new drop set
  function handleDropSets() {
    const updatedDropSets = [...dropSets, { id: id + "-" + dropSets.length, weight: "", reps: "", minutes: "", seconds: "" }];
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
    <div className="set-container">
      <p className="set-label">Set {num}</p>

      {/* all dropsets come from the array now, each gets its data passed as initialData */}
      {dropSets.map((dropset) => (
        <Dropsets key={dropset.id} exerciseType={exerciseType} initialData={dropset} />
      ))}

      {/* this is the button to add a new drop set */}
      <button className="action-button" onClick={handleDropSets}>+ for Drop Sets</button>
      {/* this is the button to remove a drop set, only shown if there are more than one */}
      {dropSets.length > 1 && (
        <button className="action-button" onClick={handleMinus}>- for Drop Sets</button>
      )}
    </div>
  );
}

export default Sets;
