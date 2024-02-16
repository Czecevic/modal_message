import React, { useState } from "react";
import "./Modal.css";

interface useModalProps {
  saveEmployee: string;
}

export const useModal: React.FunctionComponent<useModalProps> = ({
  saveEmployee,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      {isOpen === true &&
        (saveEmployee === "addEmployee" ? (
          <div className="popupvalide">
            <button name="popupvalide" onClick={() => setIsOpen(false)}>
              X
            </button>
            <p>Employee Created!</p>
          </div>
        ) : (
          saveEmployee === "notAddEmployee" && (
            <div className="popup">
              <button name="popup" onClick={() => setIsOpen(false)}>
                X
              </button>
              <p>Employee was not created, check your information</p>
            </div>
          )
        ))}
    </div>
  );
};
