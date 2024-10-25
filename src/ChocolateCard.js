/** @format */
import { useState } from "react";

const ChocolateCard = ({ chocolate }) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="chocolate-card">
            <img 
                src={chocolate.img}
                style={{
                    padding: "10px 20px",
                    textAlign: "center",
                    width: "100px",
                }}
            />
            <h3>{chocolate.name}</h3>
            <p>{chocolate.description}</p>
            <p>{chocolate.ingredients}</p>
            
            <button onClick={handleOpenModal}>Show Chocolate Info</button>
            {showModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h4>{chocolate.name} Calories</h4>
                        <p>{chocolate.calories}</p>
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChocolateCard;