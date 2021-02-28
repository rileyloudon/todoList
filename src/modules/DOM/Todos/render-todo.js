import { myTodos, viewingGroup } from '../../controllers/user-data';
import timeLeft from '../../controllers/Todos/time-left';
import groupStyle from '../../controllers/Todos/group-style';

const renderTodo = () => {
  const displayTodo = document.getElementById('todos');

  const renderDOM = (todo) => {
    return `
      <div id='render-todo' style='border: 1px solid ${groupStyle(todo)}'>
        <p id='render-title' style='color:${groupStyle(todo)}'>${
      todo.title
    }</p> 
        <p id='render-dueDate'>${timeLeft(todo)}</p> 
        <p id='render-todo-group' style='color:${groupStyle(todo)}'>${
      todo.group
    }</p>
      </div>`;
  };

  if (viewingGroup === 'View All') {
    displayTodo.innerHTML = `${myTodos
      .map((todo) => renderDOM(todo))
      .join('')}`;
  } else {
    displayTodo.innerHTML = `${myTodos
      .filter((todo) => todo.group === viewingGroup)
      .map((todo) => renderDOM(todo))
      .join('')}`;
  }
};

export default renderTodo;
