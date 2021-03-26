import renderTodo from '../../DOM/Todos/render-todo';
import closeNavbar from '../close-navbar';
import { myTodosComingUp, myTodosComingUpReverse } from '../user-data';

let comingUpSort;

// Coming Up is unable to edit myTodos, to see/change the function check user-data.js
const comingUp = () => {
  const normalSort = () => {
    myTodosComingUp();
    comingUpSort = 'coming-up';
    renderTodo();
  };

  const reverseSort = () => {
    myTodosComingUpReverse();
    comingUpSort = 'coming-up-reverse';
    renderTodo();
  };

  if (comingUpSort === 'coming-up') reverseSort();
  else normalSort();

  if (window.matchMedia('(max-width: 600px)').matches) closeNavbar();
};

export default comingUp;
