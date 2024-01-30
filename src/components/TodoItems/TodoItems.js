import React, { useContext, useState } from "react";
import Store from "../../state/context";
import Paper from '@mui/material/Paper';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



const TodoItems = ({ id, description, todo }) => {
  const { state, dispatch } = useContext(Store);
  const [ checked, setChecked ] = useState(!todo.active);

  const handleItemComplete = () => {
    dispatch({ type: "TOGGLE_STATUS", payload: id });
    dispatch({ type: "SET_STATUS", payload: state.filter });
    setChecked(checked === true ? false : true)
  }

  return (
    <div className='todo-item'>
      <Paper 
        className="todo-box"
        elevation={3}
        square
      >
        <FormGroup>
          <FormControlLabel 
            control={<Checkbox onChange={handleItemComplete} checked={checked}/>} 
            label={description} 
            data-testid="todo-checkbox"
          />
        </FormGroup>
      </Paper>
    </div>
  )
}

/*
const TodoItems = ({ id, description, tasks, setTasks }) => {

  const toggleTaskStatus = (id) => {

    const newTasks = [...tasks];
    newTasks[index] = todo;
    setTodos(newTodos);
  



    const newTodos = tasks.map((task) => {
      if (task.id === id && task.active === true) {
        return {...task, active: false};
      } else if (task.id === id && task.active === false) {
        return {...task, active: true};
      } else {
        return task;
      }
      
    })
    setTasks(newTodos);
  };

  return (
    <div className='todo-item'>
      <Paper 
        className="todo-box"
        elevation={3}
        square
      >
        <FormGroup>
          <FormControlLabel 
            control={<Checkbox onChange={toggleTaskStatus(id)} />} 
            label={description} 
            data-testid="todo-checkbox"
          />
        </FormGroup>
      </Paper>
    </div>
  )
}
*/
export default TodoItems