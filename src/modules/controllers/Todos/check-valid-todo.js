import { isFuture, parseISO } from 'date-fns';
import todoFormError from '../../DOM/Todos/todo-error-handler';
import { myTodos } from '../user-data';
import { createTodo } from './create-todo';

const validTodo = (e) => {
  e.preventDefault();

  const todoName = document.getElementById('todo-title').value.trim();

  const testDate = document.getElementById('todo-date').value;
  const compareDate = testDate.replace(/\/|\./g, '-');

  const testTime = document.getElementById('todo-time').value;
  const timeRegex = new RegExp(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/gm);

  const errorBox = document.getElementById('todo-form-error');

  let alreadyExists = false;

  myTodos.forEach((todo) => {
    if (todoName === todo.name || todoName === todo.humanizeTodoName()) {
      alreadyExists = true;
    }
  });

  if (todoName !== '') {
    if (isFuture(parseISO(compareDate)) || testDate === '') {
      if (timeRegex.test(testTime) || testTime === '') {
        if (!alreadyExists) {
          createTodo();
          errorBox.style.display = 'none';
        } else todoFormError('exists');
      } else todoFormError('time');
    } else todoFormError('date');
  } else todoFormError('title');
};

export default validTodo;
