import NewEventForm from "../components/events/NewEventForm";
import { useHistory } from "react-router-dom";

function NewEventPage() {
  const history = useHistory();

  function addEventHandler(eventData) {
    // Firebase Real-time Database API
    fetch(
      "https://react-memory-app-f1cdb-default-rtdb.firebaseio.com/events.json",
      {
        method: "POST",
        body: JSON.stringify(eventData), // convert js object to json
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
        history.replace('/')
    }); // just js function
  }

  // return <div>New Event Page</div>;
  return (
    <section>
      <h1>Add New Event</h1>
      <NewEventForm onAddEvent={addEventHandler} />
    </section>
  );
}

export default NewEventPage;
