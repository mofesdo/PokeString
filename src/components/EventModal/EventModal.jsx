/* eslint-disable react/prop-types */
import "./EventModal.css";
import placeholder from "../../assets/placeholder.png";

function EventModal({event}) {
    console.log(event)
  return (
    <li className="event-modal">
      <img src={event.image} alt="" className="event-modal__img" />
      <h2 className="event-modal__title">{event.name}</h2>
    </li>
  );
}

export default EventModal;
