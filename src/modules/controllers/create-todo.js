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
  let dateAdded = new Date();
  let todoDueDate = document.getElementById('todo-date').value;
  let todoDueTime = ' 00:00';
  let todoGroup = document.getElementById('todo-group').value;

  const todo = new Todo(
    todoName,
    dateAdded,
    todoDueDate === '' ? '∞' : new Date(todoDueDate + todoDueTime),
    todoGroup,
  );

  myTodos.unshift(todo);
  renderTodo();

  document.getElementById('todo-form').reset();
};

// format(new Date(), 'PPP')

export default createTodo;
