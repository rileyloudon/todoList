import { myTodos, completeTodo } from '../user-data';

const handleCompleteTodo = (btn) => {
  myTodos.forEach((todo) => {
    if (btn.classList.contains(todo.name)) {
      completeTodo(todo);
    }
  });

  localStorage.setItem('userTodos', JSON.stringify(myTodos));
};

export default handleCompleteTodo;
