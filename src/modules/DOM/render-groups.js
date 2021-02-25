import { myGroups } from '../controllers/user-data';

const renderGroups = () => {
  const displayGroups = document.getElementById('user-groups');

  displayGroups.innerHTML = `${myGroups
    .map(
      (group) => `
      <div class='render-group' style='border: 1px solid ${group.groupColor}'>
        <p class='render-group-title'>${group.groupName}</p>
        <label for='render-group-color' style='color:${group.groupColor}; border:1px solid ${group.groupColor}'>Change Color</label>
        <input type='color' id='render-group-color' class='${group.groupName}' value='${group.groupColor}'>
        <button class='delete-group'>Delete Group</button>
      </div>`,
    )
    .join('')}`;
};

export default renderGroups;
