import React from "react";

const HabitCard = ({ habit, onCheckIn }) => {
  return (
    <div className="card habit-card shadow-sm mb-3">
      <div className="card-body">
        <h5 className="card-title">{habit.name}</h5>
        <h6 className="card-subtitle">
          Category: {habit.category}
        </h6>
        <p className="card-text">
          Current Streak: <strong>{habit.streak} days</strong>
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
