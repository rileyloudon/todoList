import createTodo from './create-todo';

const validTodo = (e) => {
  e.preventDefault();

  if (document.getElementById('todo-title').value !== '') {
    createTodo();
  }
};

export default validTodo;
