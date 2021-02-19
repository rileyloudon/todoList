import renderTodo from '../DOM/render-todo';
import { myTodos } from './user-data';

const dateAdded = () => {
  myTodos.sort((a, b) => b.dateAdded - a.dateAdded);

  renderTodo();
};

export default dateAdded;
