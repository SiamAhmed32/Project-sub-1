import React, { useState } from "react";
import ModalFooter from "./ModalFooter";
import { FaCreditCard } from "react-icons/fa";

const AddCardModal = ({ onClose, onSave }) => {
  const [cardInfo, setCardInfo] = useState({
    name: "Alex jones",
    number: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(cardInfo);
      }}
    >
      <div className="space-y-4">
        <div>
          <label className="form-label">Name on card</label>
          <input
            type="text"
            name="name"
            value={cardInfo.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Card number</label>
          <div className="relative">
            <input
              type="text"
              name="number"
              placeholder="0000 0000 0000 0000"
              value={cardInfo.number}
              onChange={handleChange}
              className="form-input pr-10"
            />
            <FaCreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="form-label">Expire date</label>
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={cardInfo.expiry}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">CVC</label>
            <input
              type="text"
              name="cvc"
              placeholder="123"
              value={cardInfo.cvc}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        </div>
      </div>
      <ModalFooter
        onClose={onClose}
        onSave={() => onSave(cardInfo)}
        saveButtonText="Save"
      />
    </form>
  );
};

export default AddCardModal;
