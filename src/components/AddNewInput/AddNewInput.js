import React, { useContext, useState } from "react";
import Store from "../../state/context";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';



const AddNewInput = () => {
  const { dispatch } = useContext(Store);
  const [ text, setText ] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  function handleTodoAdd() {
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (text === '') return;
    handleTodoAdd(text);
  }


  return (
    <Box
      component="form"
      onSubmit={e => handleSubmitForm(e)}
      data-testid='add-new-form'
    >
      <TextField 
        fullWidth 
        id="outlined-basic"
        label="Add New" 
        variant="outlined" 
        value={text} 
        data-testid='add-new-input'
        onChange={handleTextChange}
      />
    </Box>
  )
};



/*
const AddNewInput = ({ addTask }) => {
  const [ newItem, setNewItem ] = useState('');

  const submitTask = (e) => {
    e.preventDefault();
    if (newItem === '') return;
    addTask(newItem);
    setNewItem("");   
  }

  return (
    <Box
      component="form"
      onSubmit={e => submitTask(e)}
      data-testid='add-new-form'
    >
      <TextField 
        fullWidth 
        id="outlined-basic"
        label="Add New" 
        variant="outlined" 
        value={newItem} 
        data-testid='add-new-input'
        onChange={e => setNewItem(e.target.value)}
      />
    </Box>
  )
}
*/
export default AddNewInput