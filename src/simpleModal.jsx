import { useEffect, useState } from "react";

export const UseModal = ({ employee, submitButton, setSubmitButton }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [saveEmployee, setSaveEmployee] = useState("");

  const isEmployeeFilled = Object.values(employee).every((value) => !!value);
  useEffect(() => {
    if (isEmployeeFilled && submitButton) {
      setSaveEmployee("add");
      setIsOpen(true);
    } else if (!isEmployeeFilled && submitButton) {
      setSaveEmployee("notAdd");
      setIsOpen(true);
    }
  }, [isEmployeeFilled, submitButton]);

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
          <p>Employee Created!</p>
        </div>
      ) : (
        saveEmployee === "notAdd" && (
          <div className="popup">
            <button name="popup" onClick={() => closeButton()}>
              X
            </button>
            <p>Employee was not created, check your information</p>
          </div>
        )
      )}
    </div>
  );
};
