/* eslint-disable react/jsx-key */
import "./EventsPage.css";
import EventModal from "../EventModal/EventModal";
import { Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

function EventsPage({events}) {
  console.log(events);
  return (
    <div className="events-page">
      <h1 className="events-page__title">Events</h1>
      <ul className="events-page__list">
        {events.map((item) => (
          <Link to={`/events/${item.name.replaceAll(" ", "-")}`} key={item.id}>
            <EventModal event={item} />
          </Link>
        ))}
      </ul>
      <p>test</p>
      <Outlet />
    </div>
  );
}

export default EventsPage;
