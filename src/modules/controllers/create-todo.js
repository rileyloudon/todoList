import todaysDate from './todays-date';

const createTodo = () => {
  let myTodos = [];

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
    todoDate = 'Anytime';
  }

  const todo = new Todo(todoName, dateAdded, todoDate, todoGroup);

  myTodos.push(todo);

  document.getElementById('todo-form').reset();
};

export default createTodo;
