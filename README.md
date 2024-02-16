# Modal React

## Installation

install the package using npm:
`npm install modal_message`

## Initialization

import useModal component into your React component :
`export { useModal } from "modal_message"`

il faudra créer un useState nommé _saveEmployee_ comme ceci :
` const [saveEmployee, setSaveEmployee] = useState("")`
il ne vous restera plus qu'a créer votre condition pour renvoyer l'un des messages suivant :

```
    if (condition) {
      setSaveEmployee("addEmployee");
    } else {
      setSaveEmployee("notAddEmployee");
    }
  };
  [...]
  <AddEmployee saveEmployee={saveEmployee} />
```

test update
