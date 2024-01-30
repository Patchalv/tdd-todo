import React, { useContext } from "react";
import Store from "../../state/context";
import TodoItems from '../TodoItems/TodoItems';


const TodoList = () => {
  const { state } = useContext(Store);

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === "Active") {
      return todo.active === true;
    }

    if (state.filter === "Completed") {
      return todo.active === false;
    }
    return true;
  })


  return (
    <div>
      {filteredTodos.map(todo => (
        <TodoItems key={todo.id} id={todo.id} description={todo.description} todo={todo} />
      ))}
    </div>
  )
}







/*
const TodoList = ({ tasks, taskSelected, setTasks }) => {
  
  if (Object.keys(tasks).length === 0) {
    return (
      <div>
        <p>Got nothing to do!</p>
      </div>
    )

  } else if (Object.keys(tasks).length !== 0 && taskSelected === 'Active') {

    const activeTasks = tasks.filter((task) => task.active === true);

    return (
      <div>
        {activeTasks.map(task => (
          <TodoItems key={task.id} id={task.id} description={task.description} tasks={tasks} setTasks={setTasks} />
        ))}        
      </div>
    )   
  } else if (Object.keys(tasks).length !== 0 && taskSelected === 'Completed') {

    const completedTasks = tasks.filter((task) => task.active === false);

    return (
      <div>
        {completedTasks.map(task => (
          <TodoItems key={task.id} id={task.id} description={task.description} tasks={tasks} setTasks={setTasks} />
        ))}        
      </div>
    )   


  } else {
    return (
      <div>
        {tasks.map(task => (
          <TodoItems key={task.id} id={task.id} description={task.description} />
        ))}        
      </div>
    )   
  }
}
*/
export default TodoList;