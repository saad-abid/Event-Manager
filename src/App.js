import { useState } from "react";
import "./App.css";
import EventList from "./components/EventList";
import Modal from "./components/Modal";
import NewEventForm from "./components/NewEventForm";
import Title from "./components/Title";

function App() {
  const [events, setEvents] = useState([]);
  const [showEvents, setShowEvents] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const removeClickHandler = (id) => {
    setEvents((preEvent) => {
      return preEvent.filter((event) => {
        return event.id !== id;
      });
    });
  };

  const closeHandle = ()=> {
    setShowModal(false)
  }

  //getting new event from form and adding it in events array
const addNewEvent = (event) =>{
  setEvents((previousEvents)=>{
    return [...previousEvents, event]
  });
}

  return (
    <div className="App">
      <Title />
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {showEvents && <EventList removeClickHandler={removeClickHandler} events={events}/>}
      {showModal && (
        <Modal closeHandle={closeHandle}>
          <NewEventForm addNewEvent={addNewEvent} closeModal={closeHandle}/>
        </Modal>
      )}

      {!showModal && <button onClick={()=>  setShowModal(true)  }>Add Event</button>}
    </div>
  );
}

export default App;
