import renderTodo from '../../DOM/Todos/render-todo';
import { myTodos } from '../user-data';

const completeTodo = (btn) => {
  myTodos.forEach((todo) => {
    if (btn.classList.contains(todo.name)) {
      todo.completeTodo();
    }
  });

  renderTodo();
  localStorage.setItem('userTodos', JSON.stringify(myTodos));
};

export default completeTodo;
