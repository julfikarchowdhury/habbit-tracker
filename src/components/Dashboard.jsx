import React, { useContext, useState } from "react";
import { HabitContext } from "../context/HabbitContext";
import HabitCard from "./HabitCard";
import HabitForm from "./HabitForm";
import Navbar from "./Navbar"; // Navbar component
import Quotes from "./Quotes";
import Modal from "./Modal";

const Dashboard = () => {
  const { habits, handleCheckIn } = useContext(HabitContext);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });
  const handleShowModal = (card) => {
    setModalContent({ title: card.title, body: card.details });
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
                <HabitCard habit={habit} onCheckIn={handleCheckIn}onShowModal={handleShowModal} />
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
      <Modal
        show={showModal}
        handleClose={handleCloseModal}
       
      >
        <p>{modalContent.body}</p>
      </Modal>
    </div>
  );
};

export default Dashboard;
