import React, { createContext, useEffect, useState } from "react";

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState(() => {
    const storedHabits = localStorage.getItem("habits");
    return storedHabits ? JSON.parse(storedHabits) : [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);
  const getTodayDate = () => {
    return new Date().toISOString().split("T")[0]; // Get YYYY-MM-DD format
  };

  const handleCheckIn = (habitId) => {
    const today = getTodayDate();
    setHabits((habits) =>
      habits.map((habit) => {
        if (habit.id === habitId) {
          if (habit.lastCheckIn === today) {
            alert("You already checked in today!");
            return habit;
          }
          return {
            ...habit,
            streak: habit.streak + 1,
            lastCheckIn: today,
          };
        }
        return habit;
      })
    );
  };
  const addHabit = (name, category, description) => {
    setHabits([
      ...habits,
      {
        id: habits.length + 1,
        name,
        category,
        description,
        streak: 0,
        lastCheckIn: null,
      },
    ]);
  };
  const handleDelete = (habitId) => {
    setHabits((habits) => habits.filter((habit) => habit.id !== habitId));
  };
  return (
    <HabitContext.Provider
      value={{ habits, handleCheckIn, addHabit, handleDelete }}
    >
      {children}
    </HabitContext.Provider>
  );
};
