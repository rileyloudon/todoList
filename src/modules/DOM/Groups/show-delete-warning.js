import cancelDelete from '../../controllers/Groups/cancel-delete-group';
import deleteAll from '../../controllers/Groups/delete-group-with-todos';

const showWarning = (group) => {
  const warningElement = document.getElementsByClassName(
    `group-warning ${group}`,
  )[0];

  warningElement.style.display = 'grid';

  const cancelBtn = document.getElementsByClassName(`cancel ${group}`)[0];
  cancelBtn.addEventListener('click', () => cancelDelete(group));

  const deleteAllBtn = document.getElementsByClassName(
    `delete-all ${group}`,
  )[0];
  deleteAllBtn.addEventListener('click', () => deleteAll(group));
};

export default showWarning;
