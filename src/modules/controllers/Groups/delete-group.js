import renderGroups from '../../DOM/Groups/render-groups';
import showWarning from '../../DOM/Groups/show-delete-warning';
import { myGroups, myTodos, deleteGroup } from '../user-data';

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
        renderGroups();
        localStorage.setItem('userGroups', JSON.stringify(myGroups));
      }
    }
  });
};

export default handleDeleteGroup;
