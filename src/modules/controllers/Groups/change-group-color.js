import renderGroups from '../../DOM/Groups/render-groups';
import { myGroups } from '../user-data';

const newColor = (item) => {
  console.log(item);
  myGroups.forEach((createdGroup) => {
    if (item.classList.contains(createdGroup.groupName)) {
      createdGroup.changeColor(item.value);
    }
  });

  renderGroups();
};

export default newColor;
