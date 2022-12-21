import classes from "./EventList.module.css"

const EventList = (props) => {
  return (
    <div>
      {props.events.map((event) => {
        console.log(event);
        return (
          
          <div className={classes.card} key={event.id}>
            <h1>{event.title}</h1>
            <p> {event.location} - {event.date}</p>
          
            <button onClick={() => props.removeClickHandler(event.id)}>
              Remove Evnet
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default EventList;
