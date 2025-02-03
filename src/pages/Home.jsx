import React, { useContext, useState } from "react";

import { HabitContext } from "../context/HabbitContext";
import Navbar from "../components/Navbar";
import HabitCard from "../components/HabitCard";
import Quotes from "../components/Quotes";
import HabitForm from "../components/HabitForm";
import Modal from "../components/Modal";
import "../assets/style.css";

const Home = () => {
  const { habits, handleCheckIn, handleDelete } = useContext(HabitContext);

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ body: "" });
  const handleShowModal = (description) => {
    setModalContent({ body: description });
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <div className="habit-cards">
          <h2 className="section-title header">Your Habits</h2>
          <div className="row">
            {habits.map((habit) => (
              <div className="col-md-4" key={habit.id}>
                <HabitCard
                  habit={habit}
                  onCheckIn={handleCheckIn}
                  onDelete={handleDelete}
                  onShowModal={handleShowModal}
                />
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
      <Modal show={showModal} handleClose={handleCloseModal}>
        <p>{modalContent.body}</p>
      </Modal>
    </div>
  );
};

export default Home;
