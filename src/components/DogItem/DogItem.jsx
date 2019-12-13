import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import RemoveDog from "../RemoveDog/RemoveDog";
import api from "../../api/api";
import "./style.css";

const customStyles = {
  content: {
    top: "25%",
    left: "32%",
    right: "32%",
    bottom: "auto",
    padding: "0"
  }
};

const DogItem = ({ id, name, photo }) => {
  const [showRemoveDogModal, setShowRemoveDogModal] = useState(false);
  const dogPageUrl = `/pies/${id}`;

  const openRemoveDogModal = () => {
    setShowRemoveDogModal(true);
  };

  const closeRemoveDogModal = () => {
    setShowRemoveDogModal(false);
  };

  const handleRemoveDog = () => {
    api.removeDog(id).then(() => {
      setShowRemoveDogModal(false);
    });
  };

  return (
    <div className="dog-item">
      <button className="remove" onClick={openRemoveDogModal}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </button>
      <Modal isOpen={showRemoveDogModal} style={customStyles}>
        <RemoveDog
          name={name}
          onCancel={closeRemoveDogModal}
          onConfirm={handleRemoveDog}
        />
      </Modal>
      <Link to={dogPageUrl}>
        <button className="dog-name">{name}</button>
      </Link>
      <img className="dog-photo" src={photo} alt="pies" />
    </div>
  );
};

export default DogItem;
