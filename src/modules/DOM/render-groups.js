import { myGroups } from '../controllers/user-data';

const renderGroups = () => {
  return `${myGroups
    .map(
      (group) => `
      <div id='render-group' style='border: 1px solid ${group.groupColor}'>
        <p id='render-group-title'>${group.groupName}</p>
        <label for='render-group-color' style='color:${group.groupColor}; border:1px solid ${group.groupColor}'>Change Color</label>
        <input type='color' id='render-group-color' value='${group.groupColor}'>
        <button id='delete-group'>Delete Group</button>
      </div>`,
    )
    .join('')}`;
};

export default renderGroups;
