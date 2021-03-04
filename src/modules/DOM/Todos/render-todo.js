import { myTodos, viewingGroup } from '../../controllers/user-data';
import timeLeft from '../../controllers/Todos/time-left';
import groupStyle from '../../controllers/Todos/group-style';
import completeTodo from '../../controllers/Todos/complete-todo';

const renderTodo = () => {
  const displayTodo = document.getElementById('todos');

  const renderDOM = (todo) => {
    const getStyle = groupStyle(todo);
    const getTimeLeft = timeLeft(todo);
    const timeLeftColor =
      getTimeLeft === 'Expired' ? 'var(--dark-delete)' : 'var(--dark-green)';

    return `
      <div class='render-todo' style='border: 1px solid ${getStyle}'>
        <p class='render-title ${
          todo.name
        }' style='color:${getStyle}'>${todo.humanizeTodoName()}</p> 
        <p class='render-dueDate' style='color:${timeLeftColor}'>${getTimeLeft}</p> 
     <button class='complete-todo ${
       todo.name
     }' style='color:${getStyle}; border:1px solid ${getStyle}'>Completed</button>

      </div>`;
  };

  if (viewingGroup === 'View All') {
    displayTodo.innerHTML = `${myTodos
      .map((todo) => renderDOM(todo))
      .join('')}`;
  } else {
    displayTodo.innerHTML = `${myTodos
      .filter((todo) => todo.humanizeTodoGroup() === viewingGroup)
      .map((todo) => renderDOM(todo))
      .join('')}`;
  }

  const completedBtn = document.querySelectorAll('.complete-todo');
  completedBtn.forEach((btn) => {
    btn.addEventListener('click', () => completeTodo(btn));
  });

  const todoBtn = document.querySelectorAll('.render-title');
  todoBtn.forEach((btn) => {
    btn.addEventListener('click', () => todoMoreInfo(btn));
  });
};

export default renderTodo;
