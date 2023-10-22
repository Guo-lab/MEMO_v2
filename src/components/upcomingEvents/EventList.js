import EventItem from "./EventItem";
import classes from "./EventList.module.css";

function EventList(props) {
  return (
    <ul className={classes.list}>
      {props.events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          image={event.image}
          title={event.title}
          location={event.location}
          description={event.description}
        />
      ))}
    </ul>
  );
}

export default EventList;