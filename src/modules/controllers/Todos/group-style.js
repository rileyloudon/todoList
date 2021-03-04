import { myGroups } from '../user-data';

const groupStyle = (todo) => {
  let color = window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'var(--light-main-color)'
    : 'var(--dark-main-color)';
  myGroups.forEach((group) => {
    if (todo.group === group.groupName) color = group.groupColor;
  });
  return color;
};

export default groupStyle;
