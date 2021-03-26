import renderTodo from '../../DOM/Todos/render-todo';
import closeNavbar from '../close-navbar';
import { myTodos } from '../user-data';

let dateAddedSort;

const dateAdded = () => {
  const normalSort = () => {
    myTodos.sort((a, b) => a.dateAdded - b.dateAdded);
    dateAddedSort = 'date-added';
    renderTodo();
  };

  const reverseSort = () => {
    myTodos.sort((a, b) => b.dateAdded - a.dateAdded);
    dateAddedSort = 'date-added-reverse';
    renderTodo();
  };

  if (dateAddedSort === 'date-added') reverseSort();
  else normalSort();

  if (window.matchMedia('(max-width: 600px)').matches) closeNavbar();
};

export default dateAdded;
