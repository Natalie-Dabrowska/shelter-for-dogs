import React from "react";
import "./style.css";

const RemoveDog = ({ name, onCancel, onConfirm }) => {
  return (
    <div className="modal-size">
      <div className="title-modal">
        Czy na pewno usunąć psa o imieniu: {name}?
      </div>
      <div className="modal-yes">
        <button
          className="button-yes"
          type="submit"
          align="center"
          onClick={onConfirm}
        >
          Tak
        </button>
        <button
          className="button-no"
          type="submit"
          align="center"
          onClick={onCancel}
        >
          Nie
        </button>
      </div>
    </div>
  );
};

export default RemoveDog;
