import React from "react";
import Set from "./Set";
import { useNavigate } from "react-router-dom";

function Day() {
  const navigate = useNavigate();

  const [date, setDate] = React.useState(""); //state for setting date
  const [edit, setEdit] = React.useState(false); //state for editing date
  const [day, setDay] = React.useState(""); //state for naming the day eg.chest day
  const [exerciseName, setExerciseName] = React.useState(""); //state for setting exercise name
  const [exerciseType, setExerciseType] = React.useState(""); //state for setting the type of exercise eg.weights and reps,duration or assisted etc

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
      {/*this is a redundant bit where there are 2 input tags for entering
       day and exercise name, in future i can make it a reusable component but for now
      this redundancy exists. */}
      <input
        type="text"
        placeholder="Enter day"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter exercise"
        value={exerciseName}
        onChange={(e) => setExerciseName(e.target.value)}
      />
      <br />
      <Set exerciseType={exerciseType} setExerciseType={setExerciseType} />
    </>
  );
}

export default Day;
