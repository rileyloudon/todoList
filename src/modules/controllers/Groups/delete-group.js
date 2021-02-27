import renderGroups from '../../DOM/Groups/render-groups';
import { myGroups } from '../user-data';

const deleteGroup = (item) => {
  console.log(item);
  myGroups.forEach((createdGroup) => {
    if (item.classList.contains(createdGroup.groupName)) {
      createdGroup.deleteGroup();
    }
  });

  renderGroups();
};

export default deleteGroup;
