import { myGroups, myTodos, deleteGroup, completeTodo } from '../user-data';

const cancelDelete = (deletedGroup) => {
  const selectedGroup = document.getElementsByClassName(
    `group-warning ${deletedGroup}`
  )[0];

  selectedGroup.style.display = 'none';
};

const deleteAll = (deletedGroup) => {
  myTodos.forEach((todo) => {
    if (deletedGroup === todo.group) completeTodo(todo);
  });

  myGroups.forEach((group) => {
    if (deletedGroup === group.groupName) deleteGroup(group);
  });

  localStorage.setItem('userGroups', JSON.stringify(myGroups));
  localStorage.setItem('userTodos', JSON.stringify(myTodos));
};

const showWarning = (group) => {
  const warningElement = document.getElementsByClassName(
    `group-warning ${group}`
  )[0];

  warningElement.style.display = 'grid';
};

const handleDeleteGroup = (item) => {
  const deletedGroup = item.classList[1];

  myGroups.forEach((group) => {
    if (deletedGroup === group.groupName) {
      if (
        myTodos.length > 0 &&
        myTodos.some((todo) => deletedGroup === todo.group)
      ) {
        showWarning(deletedGroup);
      } else {
        deleteGroup(group);
        localStorage.setItem('userGroups', JSON.stringify(myGroups));
      }
    }
  });
};

export { handleDeleteGroup, deleteAll, cancelDelete };
