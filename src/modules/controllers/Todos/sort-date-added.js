import renderTodo from '../../DOM/Todos/render-todo';
import closeNavbar from '../close-navbar';
import { mySort, myTodos } from '../user-data';

const dateAdded = () => {
  const normalSort = () => {
    myTodos.sort((a, b) => a.dateAdded - b.dateAdded);
    mySort = 'date-added';
    renderTodo();
  };

  const reverseSort = () => {
    myTodos.sort((a, b) => b.dateAdded - a.dateAdded);
    mySort = 'date-added-reverse';
    renderTodo();
  };

  mySort === 'date-added' ? reverseSort() : normalSort();

  if (window.matchMedia('(max-width: 600px)').matches) closeNavbar();
};

export default dateAdded;
