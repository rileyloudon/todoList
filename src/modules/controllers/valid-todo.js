import createTodo from './create-todo';

const validTodo = (e) => {
  e.preventDefault();

  if (document.getElementById('todo-name') !== '') {
    createTodo();
  }
};

export default validTodo;
