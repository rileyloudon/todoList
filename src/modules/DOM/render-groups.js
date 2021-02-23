import { myGroups } from '../controllers/user-data';

const renderGroups = () => {
  return `${myGroups
    .map(
      (group) => `
      <div id='render-group' style='border: 1px solid ${group.groupColor}'>
        <p id='render-group-title'>${group.groupName}</p>
        <label for='render-group-color'>Change Color: </label>
        <input type='color' id='render-group-color' value='${group.groupColor}'>
      </div>`,
    )
    .join('')}`;
};

export default renderGroups;
