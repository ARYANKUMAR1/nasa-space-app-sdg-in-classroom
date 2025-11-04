import "../styles/SDGCard.css"; 
import React, { useState } from "react";
import Modal from 'react-modal';

const SDGCard = ({ title, image, moreInfo, shortDescription }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <div className="sdg-card" onClick={openModal}>
            <div className="sdg-card-inner">
                <div className="sdg-card-front">
                    <img src={image} alt={title} className="sdg-image" />
                    <h3>{title}</h3>
                </div>
                <div className="sdg-card-back">
                    <h3>{title}</h3>
                    <p>{shortDescription}</p>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="SDG Details"
                ariaHideApp={false}
            >
                <h2>{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: moreInfo }} />
                {/* <button onClick={closeModal}>Close</button> */}
            </Modal>
        </div>
    );
};

export default SDGCard;

