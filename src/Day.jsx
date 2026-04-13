import React from "react";
import Exercise from "./Exercise";

function Day() {
  const [date, setDate] = React.useState(""); //state for setting date
  const [edit, setEdit] = React.useState(false); //state for editing date
  const [day, setDay] = React.useState(""); //state for naming the day eg.chest day
  const [exerciseArray, setExerciseArray] = React.useState([]); //state of array for storing exercises
  const id = React.useId();

  // function to add a new exercise to the array
  function handleAddExercise() {
    setExerciseArray([
      ...exerciseArray,
      { id: id + "-" + exerciseArray.length },
    ]);
  }

  // function to remove the last exercise from the array
  function handleMinus() {
    if (exerciseArray.length > 0) {
      const updatedExercises = exerciseArray.slice(0, -1);
      setExerciseArray(updatedExercises);
    }
  }

  return (
    <>
      {/*thi section is for displaying the date and edit button,logic is if date
      is entered and edit button is not pressed then the date and day is shown
      but if edit button is pressed then we see the usual input tag for the
      date.*/}
      {date && !edit ? (
        <>
          <p>
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              weekday: "long",
            })}
          </p>
          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      ) : (
        <input
          type="date"
          placeholder="Enter date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            setEdit(false);
          }}
        />
      )}
      <br />
      {/*this is the part where the user enters the name for the day for eg. chest and tricep day */}
      <input
        type="text"
        placeholder="Enter day"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />
      <br />
      <Exercise number={1} />
      <br />
      {/* this is the map function to render each exercise in the array */}
      {exerciseArray.map((exercise, index) => (
        <Exercise key={exercise.id} number={index + 2} />
      ))}
      <br />
      {/* this is the button to add a new exercise */}
      <button onClick={handleAddExercise}>+ for Exercises</button>
      {/* this is the button to remove the last exercise, only shown if there are exercises */}
      {exerciseArray.length > 0 && (
        <button onClick={handleMinus}>- for Exercises</button>
      )}
    </>
  );
}

export default Day;
