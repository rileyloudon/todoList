export let myTodos = [];
export let myGroups = [];

export const myTodosComingUp = () => {
  myTodos = myTodos
    .filter((e) => e.dueDate === '∞')
    .concat(
      myTodos
        .filter((e) => e.dueDate !== '∞')
        .sort((a, b) => a.dueDate - b.dueDate)
    );
};

export const myTodosComingUpReverse = () => {
  myTodos = myTodos
    .filter((e) => e.dueDate !== '∞')
    .sort((a, b) => b.dueDate - a.dueDate)
    .concat(myTodos.filter((e) => e.dueDate === '∞'));
};

export const completeTodo = (todo) => {
  myTodos = myTodos.filter((e) => e !== todo);
};

export const deleteGroup = (group) => {
  myGroups = myGroups.filter((e) => e !== group);
};
