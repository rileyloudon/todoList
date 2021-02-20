import { myTodos, viewingGroup } from '../controllers/user-data';
import timeLeft from '../controllers/time-left';

const renderTodo = () => {
  const displayTodo = document.getElementById('todos');

  if (viewingGroup === 'view all') {
    displayTodo.innerHTML = `${myTodos
      .map(
        (todo) =>
          `<div id='render-todo' class='${todo.group}'>
          <p id='render-title'>${todo.title}</p> 
          <p id='render-dueDate'>${timeLeft(todo)}</p> 
          <p id='render-group'>${todo.group}</p>
        </div>`,
      )
      .join('')}`;
  } else {
    displayTodo.innerHTML = `${myTodos
      .filter((todo) => todo.group === viewingGroup)
      .map(
        (todo) =>
          `<div id='render-todo' class='${todo.group}'>
        <p id='render-title'>${todo.title}</p> 
        <p id='render-dueDate'>${timeLeft(todo)}</p> 
        <p id='render-group'>${todo.group}</p>
      </div>`,
      )
      .join('')}`;
  }
};

export default renderTodo;
