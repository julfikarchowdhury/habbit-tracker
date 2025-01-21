import React, { useContext, useState } from "react";
import Quotes from "./Quotes";
import HabitCard from "./HabitCard";
import { HabitContext } from "../context/HabbitContext";
import HabitForm from "./HabitForm";
const Dashboard = () => {
  const { habits, handleCheckIn, addHabit } = useContext(HabitContext); // Access the context directly

  return (
    <div className="container mt-4">
      <Quotes />
      <h2 className="mb-3">Habit Tracker</h2>
      <div className="row">
        {habits.map((habit) => (
          <div className="col-md-4" key={habit.id}>
            <HabitCard habit={habit} onCheckIn={handleCheckIn} />
          </div>
        ))}
      </div>
      <HabitForm />
    </div>
  );
};

export default Dashboard;
