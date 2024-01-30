import uuid4 from "uuid4";

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      let newTodo = {
        id: uuid4(), 
        description: action.payload, 
        active: true
      }

      return {
        ...state,
        todos: [...state.todos, newTodo ]
      };
    case "TOGGLE_STATUS":
      {
        const idx = state.todos.findIndex(task => task.id === action.payload);
        const todo = Object.assign({}, state.todos[idx]);
        if (todo.active === true) {
          todo.active = false;
        } else {
          todo.active = true;
        }
        const todos = Object.assign([], state.todos);
        todos.splice(idx, 1, todo);
        return {
          todos: todos
        };
      }
    case "SET_STATUS":
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
}
