import { myTodos } from '../controllers/user-data';

const renderTodo = () => {
  const displayTodo = document.getElementById('todos');

  displayTodo.innerHTML = `${myTodos
    .map(
      (todo) =>
        `<div id='render-todo' class='${todo.group}'>
          <p id='render-title'>${todo.title}</p> 
          <p id='render-dueDate'>${todo.dueDate}</p> 
          <p id='render-group'>${todo.group}</p>
        </div>`,
    )
    .join('')}`;
};

export default renderTodo;
