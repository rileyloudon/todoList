import deleteGroup from '../../controllers/Groups/delete-group';
import newColor from '../../controllers/Groups/group-change-color';
import { myGroups } from '../../controllers/user-data';

const renderGroups = () => {
  const displayGroups = document.getElementById('user-groups');

  displayGroups.innerHTML = `${myGroups
    .map(
      (group) => `
      <div class='render-group' style='border: 1px solid ${group.groupColor}'>
        <p class='render-group-title'>${group.humanizeGroupName()}</p>
        <label for='${group.groupName}-group-color' style='color:${
        group.groupColor
      }; border:1px solid ${group.groupColor}'>Change Color</label>
        <input type='color' id='${group.groupName}-group-color' class='${
        group.groupName
      } change-color' value='${group.groupColor}'>
        <button class='delete-group ${group.groupName}'>Delete Group</button>
      </div>`,
    )
    .join('')}`;

  const changeColorBtn = document.querySelectorAll('.change-color');

  changeColorBtn.forEach((btn) => {
    btn.addEventListener('change', () => newColor(btn));
  });

  const deleteGroupBtn = document.querySelectorAll('.delete-group');
  deleteGroupBtn.forEach((btn) => {
    btn.addEventListener('click', () => deleteGroup(btn));
  });
};

export default renderGroups;
