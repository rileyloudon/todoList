import renderTodo from '../../DOM/Todos/render-todo';
import { myTodos } from '../user-data';

const completeTodo = (btn) => {
  myTodos.forEach((todo) => {
    if (btn.classList.contains(todo.name)) {
      todo.completeTodo();
    }
  });

  renderTodo();
};

export default completeTodo;
