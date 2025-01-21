import React, { useState } from "react";
import Quotes from "./Quotes";
import HabitCard from "./HabitCard";

const Dashboard = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Exercise", category: "Health", streak: 5 },
    { id: 2, name: "Read a Book", category: "Learning", streak: 3 },
    { id: 3, name: "Drink Water", category: "Health", streak: 7 },
  ]);

  const handleCheckIn = (habitId) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === habitId ? { ...habit, streak: habit.streak + 1 } : habit
      )
    );
  };

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
    </div>
  );
};

export default Dashboard;
