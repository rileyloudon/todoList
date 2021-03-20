import { myTodos } from '../user-data';

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

export default Todo;
