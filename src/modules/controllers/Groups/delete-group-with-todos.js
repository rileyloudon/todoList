import renderGroups from '../../DOM/Groups/render-groups';
import { myGroups, myTodos } from '../user-data';

const deleteAll = (deletedGroup) => {
  myTodos.forEach((todo) => {
    if (deletedGroup === todo.group) todo.completeTodo();
  });

  myGroups.forEach((group) => {
    if (deletedGroup === group.groupName) group.deleteGroup();
  });

  renderGroups();
  localStorage.setItem('userGroups', JSON.stringify(myGroups));
};
export default deleteAll;
