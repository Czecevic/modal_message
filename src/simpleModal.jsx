import { useEffect, useState } from "react";
import "./simpleModal.css";

export const UseModal = ({
  employee,
  submitButton,
  setSubmitButton,
  messageError,
  messageValid,
  validCondition = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [saveEmployee, setSaveEmployee] = useState("");
  const isEmployeeFilled = employee
    ? Object.values(employee).every((value) => !!value)
    : Object.values(employee.current).every((value) => !!value);
  useEffect(() => {
    if (isEmployeeFilled && submitButton && validCondition) {
      setSaveEmployee("add");
      setIsOpen(true);
    } else if (
      (!isEmployeeFilled && submitButton) ||
      (isEmployeeFilled && submitButton)
    ) {
      setSaveEmployee("notAdd");
      setIsOpen(true);
    }
  }, [validCondition, isEmployeeFilled, submitButton]);

  const closeButton = () => {
    setSaveEmployee("");
    setIsOpen(false);
    setSubmitButton(false);
  };

  return (
    <div>
      {isOpen === true && saveEmployee === "add" ? (
        <div className="popupvalide">
          <button name="popupvalide" onClick={() => closeButton()}>
            X
          </button>
          <p>{messageValid}</p>
        </div>
      ) : (
        saveEmployee === "notAdd" && (
          <div className="popup">
            <button name="popup" onClick={() => closeButton()}>
              X
            </button>
            <p>{messageError}</p>
          </div>
        )
      )}
    </div>
  );
};
