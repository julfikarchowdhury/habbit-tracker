import React, { useState } from "react";
import { FaRegTrashCan, FaPlus } from "react-icons/fa6";

const HabitCard = ({ habit, onCheckIn, onShowModal }) => {
  const handleDelete = (id) => {
    alert("hi" + id);
  };
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <div className="card-header">
          <h5 className="card-title">{habit.name}</h5>
          <div className="card-icon" onClick={() => handleDelete(habit.id)}>
            <FaRegTrashCan />
          </div>
        </div>

        <h6 className="card-subtitle">Category: {habit.category}</h6>
        <p className="card-text">
          Current Streak: <strong>{habit.streak} days</strong>
        </p>
        <button className="btn" onClick={() => onShowModal(habit.description)}>
          View Details
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => onCheckIn(habit.id)}
        >
          Check In
        </button>
      </div>
    </div>
  );
};

export default HabitCard;
