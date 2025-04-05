import "./EventsPage.css";
import events from "./events.json";
import EventModal from "../EventModal/EventModal";

function EventsPage() {
  console.log(events);
  return (
    <div className="events-page">
      <h1 className="events-page__title">Events</h1>
      <ul className="events-page__list">
        {events.map((item) => (
        //   <li className="event-page__event" key={item.id}>
        //     {item.name}
        //   </li>
        <EventModal key={item.id} event = {item}/>
        ))}
      </ul>
      <p>test</p>
    </div>
  );
}

export default EventsPage;
