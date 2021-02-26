import { isAfter, parseISO } from 'date-fns';
import createTodo from './create-todo';

const validTodo = (e) => {
  e.preventDefault();

  let testDate = document.getElementById('todo-date').value;
  let compareDate = testDate.replace(/\/|\./g, '-');

  document.getElementById('todo-title').value !== ''
    ? isAfter(parseISO(compareDate), new Date()) || testDate === ''
      ? createTodo()
      : alert(`You can't complete a todo in the past!`)
    : alert('Please enter a title');
};

export default validTodo;
