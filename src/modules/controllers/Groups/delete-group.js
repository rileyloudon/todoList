import renderGroups from '../../DOM/Groups/render-groups';
import showWarning from '../../DOM/Groups/show-delete-warning';
import { myGroups, myTodos } from '../user-data';

const deleteGroup = (item) => {
  const deletedGroup = item.classList[1];

  myGroups.forEach((group) => {
    if (deletedGroup === group.groupName) {
      if (
        myTodos.length > 0 &&
        myTodos.some((todo) => deletedGroup === todo.group)
      ) {
        showWarning(deletedGroup);
      } else group.deleteGroup(), renderGroups();
    }
  });
  localStorage.setItem('userGroups', JSON.stringify(myGroups));
};
export default deleteGroup;
