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
        messageValidation={messageValidation}
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

- messageValidation affichera un text vert

- messageError affichera un text rouge

the `employee` is considered an object, add it as such :

```
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
  });
```
