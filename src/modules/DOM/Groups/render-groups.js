import {
  handleDeleteGroup,
  cancelDelete,
  deleteAll,
} from '../../controllers/Groups/handle-delete-group';
import newColor from '../../controllers/Groups/change-group-color';
import { myGroups } from '../../controllers/user-data';

const renderGroups = () => {
  const displayGroups = document.getElementById('user-groups');

  displayGroups.innerHTML = `${myGroups
    .map(
      (group, i) => `
      <div class='render-group-container ${group.groupName}'>
        <div class='render-group' style='border: 1px solid ${group.groupColor}'>
          <p class='render-group-title'>${group.humanizeGroupName()}</p>
          <label for='${i}' style='color:${
        group.groupColor
      }; border:1px solid ${group.groupColor}'>Change Color</label>
          <input type='color' id='${i}' class='${
        group.groupName
      } change-color' value='${group.groupColor}'>
          <button class='delete-group ${group.groupName}'>Delete Group</button>
        </div>
      <div class='group-warning ${
        group.groupName
      }' style='display: none; border: 1px solid ${
        group.groupColor
      }; border-top: none;
        '>
          <p class='warning-text'>Deleting this group will also delete its todos.</p>
          <p class='warning-cont'>Are you sure?</p>
          <button class='cancel ${group.groupName}'>Cancel</button>
          <button class='delete-all ${group.groupName}'>Delete</button>
        </div>
      </div>`
    )
    .join('')}`;

  const changeColorBtn = document.querySelectorAll('.change-color');
  changeColorBtn.forEach((btn) => {
    btn.addEventListener('change', () => {
      newColor(btn);
      renderGroups();
    });
  });

  const deleteGroupBtn = document.querySelectorAll('.delete-group');
  deleteGroupBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      handleDeleteGroup(btn);

      const warningDisplaed =
        document.getElementsByClassName(`group-warning ${btn.classList[1]}`)[0]
          .style.display === 'grid';

      if (warningDisplaed) {
        const cancelBtn = document.getElementsByClassName(
          `cancel ${btn.classList[1]}`
        )[0];
        cancelBtn.addEventListener('click', () =>
          cancelDelete(btn.classList[1])
        );

        const deleteAllBtn = document.getElementsByClassName(
          `delete-all ${btn.classList[1]}`
        )[0];
        deleteAllBtn.addEventListener('click', () => {
          deleteAll(btn.classList[1]);
          renderGroups();
        });
      } else renderGroups();
    });
  });
};
export default renderGroups;
