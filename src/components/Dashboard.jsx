import React, { useContext } from "react";
import { HabitContext } from "../context/HabbitContext";
import HabitCard from "./HabitCard";
import HabitForm from "./HabitForm";
import Navbar from "./Navbar"; // Navbar component
import Quotes from "./Quotes";

const Dashboard = () => {
  const { habits, handleCheckIn } = useContext(HabitContext);

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <div className="habit-cards">
          <h2 className="section-title header">Your Habits</h2>
          <div className="row">
            {habits.map((habit) => (
              <div className="col-md-4" key={habit.id}>
                <HabitCard habit={habit} onCheckIn={handleCheckIn} />
              </div>
            ))}
          </div>
        </div>

        <div className="right-section">
          <div className="quote-form-wrapper">
            <Quotes />
            <HabitForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
