import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { HabitContext } from "../context/HabbitContext";
import CategoryChart from "../components/charts/CategoryChart";
import "../assets/analytics.css";
const Analytics = () => {
  const { habits } = useContext(HabitContext);

  const calculateCategoryStats = () => {
    const categories = {};
    habits.forEach((habit) => {
      categories[habit.category] = (categories[habit.category] || 0) + 1;
    });
    return Object.entries(categories).map(([category, count]) => ({
      category,
      count,
    }));
  };

  const getTopStreak = () => {
    return habits.reduce(
      (max, habit) => (habit.streak > max.streak ? habit : max),
      { streak: 0 }
    );
  };

  return (
      <div className="analytics-container">
        <Navbar />
        <h1 className="analytics-title">Habit Analytics</h1>
        {/* Header Section */}
        <div className="analytics-header">
          <div className="analytics-card">
            <h2>Total Habits</h2>
            <p className="analytics-value">{habits.length}</p>
          </div>
          <div className="analytics-card">
            <h2>Top Habit</h2>
            <p className="analytics-value">{getTopStreak().name || "None"}</p>
            <p>Streak: {getTopStreak().streak || 0} days</p>
          </div>
          <div className="analytics-card">
            <h2>Categories</h2>
            <ul className="">
              {calculateCategoryStats().map((category, index) => (
                <li key={index} className="mt-2">
                  {category.category}: {category.count} habits
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Charts Section */}
        <div className="analytics-charts">
          <h2>Habits by Category</h2>
          <CategoryChart data={calculateCategoryStats()} />
        </div>
      </div>
  );
};

export default Analytics;
