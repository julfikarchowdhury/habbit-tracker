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
  const handleCheckIn = (habitId) => {
    setHabits((habits) =>
      habits.map((habit) =>
        habit.id === habitId ? { ...habit, streak: habit.streak + 1 } : habit
      )
    );
  };
  const addHabit = (name, category, description) => {
    setHabits([
      ...habits,
      { id: habits.length + 1, name, category, description, streak: 0 },
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
