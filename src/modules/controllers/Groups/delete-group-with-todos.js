import renderGroups from '../../DOM/Groups/render-groups';
import { myGroups, myTodos, completeTodo, deleteGroup } from '../user-data';

const deleteAll = (deletedGroup) => {
  myTodos.forEach((todo) => {
    if (deletedGroup === todo.group) completeTodo(todo);
  });

  myGroups.forEach((group) => {
    if (deletedGroup === group.groupName) deleteGroup(group);
  });

  renderGroups();
  localStorage.setItem('userGroups', JSON.stringify(myGroups));
  localStorage.setItem('userTodos', JSON.stringify(myTodos));
};
export default deleteAll;
