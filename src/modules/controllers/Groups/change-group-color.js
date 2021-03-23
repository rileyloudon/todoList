import { myGroups } from '../user-data';

const newColor = (item) => {
  myGroups.forEach((createdGroup) => {
    if (item.classList.contains(createdGroup.groupName)) {
      createdGroup.changeColor(item.value);
    }
  });
};

export default newColor;
