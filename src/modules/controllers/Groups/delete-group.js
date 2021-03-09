import renderGroups from '../../DOM/Groups/render-groups';
import { myGroups, myTodos } from '../user-data';

const deleteGroup = (item) => {
  const deletedGroup = item.classList[1];

  const showWarning = () => {
    const warningElement = document.getElementsByClassName(
      `group-warning ${deletedGroup}`,
    )[0];

    warningElement.style.display = 'grid';
  };

  myGroups.forEach((group) => {
    if (deletedGroup === group.groupName) {
      if (
        myTodos.length > 0 &&
        myTodos.some((todo) => deletedGroup === todo.group)
      ) {
        showWarning();
      } else group.deleteGroup(), renderGroups();
    }
  });
};

export default deleteGroup;
