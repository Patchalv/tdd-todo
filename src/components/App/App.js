import React, { useContext, useReducer } from "react";

import Store from "../../state/context";
import reducer from "../../state/reducer";

import AddNewInput from "../AddNewInput/AddNewInput";
import TodoList from "../TodoList/TodoList";
import Typography from '@mui/material/Typography';
import TodoSelect from "../TodoSelector/TodoSelect";



const App = () => {
  const globalStore = useContext(Store);
  const [state, dispatch] = useReducer(reducer, globalStore);

  return (
    // State.Provider passes the state and dispatcher to the down
    <Store.Provider value={{ state, dispatch }}>
      <div className="App">
        <div className="Container">
        <Typography variant="h2" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
          To Do
        </Typography>

        <AddNewInput />
        <TodoSelect />
        <TodoList />
        </div>
      </div>
    </Store.Provider>
  );
}



/*
import React, { useState, useReducer } from "react";
import AddNewInput from "../AddNewInput/AddNewInput";
import TodoList from "../TodoList/TodoList";
import Typography from '@mui/material/Typography';
import uuid4 from "uuid4";
import TodoSelect from "../TodoSelector/TodoSelect";

const App = () => {
  const [ tasks, setTasks ] = useState([]);
  const [ taskSelected, setTaskSelect ] = useState('Active');

  const addTask = (newItem) => {
    const newTask = {
      id: uuid4(),
      description: newItem,
      active: true
    }
    setTasks([...tasks, newTask])
  }


  return (
    <div className="App">
      <div className="Container">
      <Typography variant="h2" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
        To Do
      </Typography>

      <AddNewInput addTask={addTask} />
      <TodoSelect taskSelected={taskSelected} setTaskSelect={setTaskSelect} />
      <TodoList tasks={tasks} taskSelected={taskSelected} setTasks={setTasks} />
      </div>
    </div>
  );
}

*/

export default App;
