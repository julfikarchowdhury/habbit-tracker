import React, { createContext, useState } from "react";

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Exercise",
      category: "Health",
      description:
        "no habit will work if you dont have any intention to be good idiot",
      streak: 5,
    },
    {
      id: 2,
      name: "Read a Book",
      category: "Learning",
      description:
        "no habit will work if you dont have any intention to be good idiot",
      streak: 3,
    },
    {
      id: 3,
      name: "Drink Water",
      category: "Health",
      description:
        "no habit will work if you dont have any intention to be good idiot",
      streak: 7,
    },
  ]);

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

  return (
    <HabitContext.Provider value={{ habits, handleCheckIn, addHabit }}>
      {children}
    </HabitContext.Provider>
  );
};
