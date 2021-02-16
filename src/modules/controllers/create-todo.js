import { myTodos } from './user-data';
import renderTodo from '../DOM/render-todo';
import { format } from 'date-fns';

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
  let dateAdded = format(new Date(), 'PPP');
  let todoDueDate = document.getElementById('todo-date').value;
  let todoGroup = document.getElementById('todo-group').value;

  if (todoDueDate === '') {
    todoDueDate = '∞';
  }

  const todo = new Todo(todoName, dateAdded, todoDueDate, todoGroup);
  myTodos.unshift(todo);
  renderTodo();

  document.getElementById('todo-form').reset();
};

export default createTodo;
