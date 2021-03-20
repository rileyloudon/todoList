import renderTodo from '../../DOM/Todos/render-todo';
import closeNavbar from '../close-navbar';
import { mySort, myTodos } from '../user-data';

const comingUp = () => {
  const normalSort = () => {
    myTodos = myTodos
      .filter((e) => e.dueDate === '∞')
      .concat(
        myTodos
          .filter((e) => e.dueDate !== '∞')
          .sort((a, b) => a.dueDate - b.dueDate),
      );
    mySort = 'coming-up';
    renderTodo();
  };

  const reverseSort = () => {
    myTodos = myTodos
      .filter((e) => e.dueDate !== '∞')
      .sort((a, b) => b.dueDate - a.dueDate)
      .concat(myTodos.filter((e) => e.dueDate === '∞'));
    mySort = 'coming-up-reverse';
    renderTodo();
  };

  mySort === 'coming-up' ? reverseSort() : normalSort();

  if (window.matchMedia('(max-width: 600px)').matches) closeNavbar();
};

export default comingUp;
