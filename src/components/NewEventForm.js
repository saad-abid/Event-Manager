import { useState } from "react";
import classes from "./NewEventForm.module.css";
const NewEventForm = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("islamabad");

  const resetForm = () => {
    setTitle("");
    setDate("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(title, date);

    const newEvent = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      date: date,
      location: location,
    };
    props.closeModal();
    props.addNewEvent(newEvent);
    resetForm();
  };

  return (
    <form
      className={classes["new-event-form"]}
      onSubmit={(event) => {
        submitHandler(event);
      }}
    >
      <label>
        <span>Event Title:</span>
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          type="text"
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
          }}
          type="date"
        />
      </label>
      <label>
        <span>Select Location:</span>
        <select
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        >
          <option value="islamabad">Islamabad</option>
          <option value="rawalpindi">Rawalpindi</option>
          <option value="lahore">Lahore</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default NewEventForm;
