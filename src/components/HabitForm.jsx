import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { HabitContext } from "../context/HabbitContext";

const HabitForm = () => {
  const { addHabit } = useContext(HabitContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addHabit(data.name, data.category, data.description);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="header mb-2">Add Habit</h2>
      <div>
        <input
          type="text"
          placeholder="Habit Name"
          {...register("name", {
            required: "Habit name is required",
            maxLength: { value: 200, message: "Name is too long" },
          })}
        />
        {errors.name && (
          <span className="error-message">{errors.name.message}</span>
        )}
      </div>

      <div>
        <select
          {...register("category", {
            required: "Category is required",
          })}
        >
          <option value="">Select a Category</option>
          <option value="Health">Health</option>
          <option value="Fitness">Fitness</option>
          <option value="Productivity">Productivity</option>
          <option value="Learning">Learning</option>
          <option value="Finance">Finance</option>
          <option value="Relationships">Relationships</option>
          <option value="Hobbies">Hobbies</option>
          <option value="Self-Care">Self-Care</option>
          <option value="Other">Other</option>
        </select>
        {errors.category && (
          <span className="error-message">{errors.category.message}</span>
        )}
      </div>

      <div>
        <textarea
          placeholder="Description"
          {...register("description", {
            required: "Description is required",
            maxLength: { value: 500, message: "Description is too long" },
          })}
        ></textarea>
        {errors.description && (
          <span className="error-message">{errors.description.message}</span>
        )}
      </div>

      <div>
        <input type="submit" value="Add Habit" />
      </div>
    </form>
  );
};

export default HabitForm;
