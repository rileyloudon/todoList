import { myGroups } from './user-data';

const groupStyle = (todo) => {
  let color = '#eee';
  myGroups.forEach((group) => {
    if (todo.group === group.groupName) color = group.groupColor;
  });
  return color;
};

export default groupStyle;
