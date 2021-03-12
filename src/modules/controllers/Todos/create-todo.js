import { myTodos } from '../user-data';
import renderTodo from '../../DOM/Todos/render-todo';

const createTodo = () => {
  class Todo {
    constructor(name, dateAdded, dueDate, group) {
      this.name = name;
      this.dateAdded = dateAdded;
      this.dueDate = dueDate;
      this.group = group;
    }

    completeTodo() {
      myTodos = myTodos.filter((e) => e !== this);
    }

    humanizeTodoName() {
      return this.name
        .replace(/%20/g, ' ')
        .replace(/%27/g, "'")
        .replace(/(\b[a-z](?=[a-z]{2})|^[a-z])/g, (letter) =>
          letter.toUpperCase(),
        );
    }

    humanizeTodoGroup() {
      return this.group
        .replace(/%20/g, ' ')
        .replace(/%27/g, "'")
        .replace(/(\b[a-z](?=[a-z]{2})|^[a-z])/g, (letter) =>
          letter.toUpperCase(),
        );
    }
  }

  let todoName = document.getElementById('todo-title').value;
  todoName = todoName
    .trim()
    .replace(/\s+/g, '%20')
    .replace(/[']+/g, '%27')
    .toLowerCase();

  let dateAdded = new Date();

  let todoDueDate = document.getElementById('todo-date').value;
  let todoDueTime = document.getElementById('todo-time').value || '00:00';

  let todoGroup = document.getElementById('todo-group').value;

  todoGroup = todoGroup
    .replace(/\s+/g, '%20')
    .replace(/[']+/g, '%27')
    .toLowerCase();

  const todo = new Todo(
    todoName,
    dateAdded,
    todoDueDate === '' ? '∞' : new Date(todoDueDate + ' ' + todoDueTime),
    todoGroup,
  );

  myTodos.unshift(todo);
  renderTodo();

  document.getElementById('todo-form').reset();
};

export default createTodo;
