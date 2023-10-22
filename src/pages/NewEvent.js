import NewEventForm from "../components/upcomingEvents/NewEventForm";
import { useNavigate } from "react-router-dom";

function NewEventPage() {
  const history = useNavigate();

  function addEventHandler(eventData) {
    // Firebase Real-time Database API
    fetch(
      process.env.REACT_APP_FIREBASE_API_KEY + "/events.json",
      {
        method: "POST",
        body: JSON.stringify(eventData), // convert js object to json
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history('/', { replace: true })
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
