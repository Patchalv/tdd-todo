import React, { useState, useContext } from 'react';
import Store from "../../state/context";

import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const TodoSelect = () => {
  const { dispatch } = useContext(Store);
  const [ filterBtn, setFilterBtn ] = useState("Active");

  
  const handleFilterToggle = (event, value) => {
    setFilterBtn(value);
    dispatch({ type: "SET_STATUS", payload: value });
    dispatch({ type: "CHANGE_TODOS_TO_SHOW", payload: value })
  };

  
  return (
    <Box
      display="flex" 
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <ToggleButtonGroup
      color="primary"
      value={filterBtn}
      exclusive
      onChange={handleFilterToggle}
      aria-label="Platform"
      className='todo-selector'
      >

      <ToggleButton value="Active">Active</ToggleButton>
      <ToggleButton value="Completed">Completed</ToggleButton>
      <ToggleButton value="All">All</ToggleButton>

      </ToggleButtonGroup>
    </Box>
  )
};

export default TodoSelect;