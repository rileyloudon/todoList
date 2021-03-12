import { myTodos, viewingGroup } from '../../controllers/user-data';
import timeLeft from '../../controllers/Todos/time-left';
import groupStyle from '../../controllers/Todos/group-style';
import completeTodo from '../../controllers/Todos/complete-todo';
import renderMoreInfo from './render-more-info';
import { format } from 'date-fns';

const renderTodo = () => {
  const displayTodo = document.getElementById('todos');

  const renderDOM = (todo) => {
    const getStyle = groupStyle(todo);
    const getTimeLeft = timeLeft(todo);

    const timeLeftColor = window.matchMedia('(prefers-color-scheme: light)')
      .matches
      ? getTimeLeft === 'Expired'
        ? 'var(--light-delete)'
        : 'var(--light-green)'
      : getTimeLeft === 'Expired'
      ? 'var(--dark-delete)'
      : 'var(--dark-green)';

    const miDueDate = todo.dueDate === '∞' ? '∞' : format(todo.dueDate, 'PPp');

    return `
    <div class='render-todo-container'>
      <div class='render-todo' style='border: 1px solid ${getStyle}'>
        <p class='render-title ${
          todo.name
        }' style='color:${getStyle}'>${todo.humanizeTodoName()}</p> 
        <p class='render-dueDate' style='color:${timeLeftColor}'>${getTimeLeft}</p> 
        <button class='complete-todo ${
          todo.name
        }' style='color:${getStyle}; border:1px solid ${getStyle}'>Completed</button>
      </div>

      <div class='todo-more-info' style='display: none; border: 1px solid ${getStyle}; border-top: none;
      '>
        <p class='mi-group' style='color:${getStyle}; border-bottom: 0.5px dashed ${getStyle};
        '>Group </p>
        <p class='group-data' style='color:${getStyle}; border-bottom: 0.5px dashed ${getStyle}'>${todo.humanizeTodoGroup()}</p>
        <p class='mi-due-date' style='color:${getStyle}; border-bottom: 0.5px dashed ${getStyle}'>Due Date </p>
        <p class='due-date-data' style='color:${getStyle}; border-bottom: 0.5px dashed ${getStyle}'>${miDueDate}</p>
        <p class='mi-date-added' style='color:${getStyle}'>Date Added </p>
        <p class='date-added-data' style='color:${getStyle}'>${format(
      todo.dateAdded,
      'PPp',
    )}</p>
      </div>
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

  const todoContainer = document.querySelectorAll('.render-todo-container');
  todoContainer.forEach((item) => {
    item.addEventListener('click', () => renderMoreInfo(item));
  });
};

export default renderTodo;
