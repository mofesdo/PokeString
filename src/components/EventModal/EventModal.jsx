/* eslint-disable react/prop-types */
import "./EventModal.css";
import placeholder from "../../assets/placeholder.png";

function EventModal({ event }) {
  console.log(event);
  return (
    <li className="event-modal">
      <img src={event.image} alt="" className="event-modal__img" />
      <div className="event-modal__info-container">
        <h2 className="event-modal__title">{event.name}</h2>
        <p className="event-modal__date">{event.date}</p>
      </div>
    </li>
  );
}

export default EventModal;
