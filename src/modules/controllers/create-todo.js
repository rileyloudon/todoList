import todaysDate from './todays-date';
import { myTodos } from './user-data';
import renderTodo from '../DOM/render-todo';

const createTodo = () => {
  class Todo {
    constructor(title, dateAdded, dueDate, group) {
      this.title = title;
      this.dateAdded = dateAdded;
      this.dueDate = dueDate;
      this.group = group;
    }
  }

  let todoName = document.getElementById('todo-title').value;
  let dateAdded = todaysDate();
  let todoDate = document.getElementById('todo-date').value;
  let todoGroup = document.getElementById('todo-group').value;

  if (todoDate === '') {
    todoDate = '∞';
  }

  const todo = new Todo(todoName, dateAdded, todoDate, todoGroup);
  myTodos.unshift(todo);
  renderTodo();

  document.getElementById('todo-form').reset();
};

export default createTodo;
