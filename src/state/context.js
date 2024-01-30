import React from "react";
import uuid4 from "uuid4";


// Store Context is the global context that is managed by reducers.

const Store = React.createContext({
  todos: [
    {
      id: uuid4(),
      description: 'Do washing up',
      active: true
    },
    {
      id: uuid4(),
      description: 'Do groceries',
      active: true
    },
    {
      id: uuid4(),
      description: 'Wash the car',
      active: true
    },
    {
      id: uuid4(),
      description: 'Walk the dog',
      active: false
    },
  ],
  filter: "Active",
  todosToShow: []
});

export default Store;