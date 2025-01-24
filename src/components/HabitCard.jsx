import React, { useContext, useState } from "react";
import { FaRegTrashCan, FaCircleInfo } from "react-icons/fa6";
import { HabitContext } from "../context/HabbitContext";

const HabitCard = ({ habit, onCheckIn, onShowModal }) => {
  const { handleDelete } = useContext(HabitContext);

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
        <p className="card-text">
          Description: &nbsp;
          <a href="#" onClick={() => onShowModal(habit.description)}>
            <FaCircleInfo />
          </a>
        </p>

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
