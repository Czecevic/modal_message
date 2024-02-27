# React Modal

simple react component that return an error message or validation message depending on your conditions

## Installation

install the package name using npm :
`npm i react_modal_openclassrooms`

## Initialization

Import the react modal component hook into your React component :
` import { UseModal } from "react_modal_openclassrooms"`

## Usage

useModal was used as this :

```
      <UseModal
        employee={employee}
        submitButton={submitButton}
        setSubmitButton={setSublmitButton}
        messageValid={messageValidation}
        messageError={messageError}
      ></UseModal>
```

add useState and link it to a button:

```
const [submitButton, setSublmitButton] = useState(false);
[...]
<button type="submit" onClick={() => setSublmitButton(true)}>
```

add error message and validation message :

```
  const messageValidation = "add element";
  const messageError = "remove element";
```

- messageValid will display green text

- messageError will display red text

the `employee` is considered an object, add it as such :

```
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
  });
```

## exemple

```
import { useState } from "react";
import { UseModal } from "react_modal_openclassrooms";
import "./App.css";

function App() {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
  });
  const [submitButton, setSublmitButton] = useState(false);

  const messageValidation = "valide message";
  const messageError = "error message";

  const addEmployee = (e) => {
    e.preventDefault();
    const { firstName, lastName } = e.target.elements;
    setEmployee({ firstName: firstName.value, lastName: lastName.value });
  };

  return (
    <div>
      <form onSubmit={(e) => addEmployee(e)}>
        <input name="firstName"></input>
        <input name="lastName"></input>
        <button type="submit" onClick={() => setSublmitButton(true)}>
          submit
        </button>
      </form>
      <UseModal
        employee={employee}
        submitButton={submitButton}
        setSubmitButton={setSublmitButton}
        messageValid={messageValidation}
        messageError={messageError}
      ></UseModal>
    </div>
  );
}

export default App;

```
