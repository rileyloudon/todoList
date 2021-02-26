import { myGroups } from '../user-data';
import createGroup from './create-group';

const validGroup = (e) => {
  e.preventDefault();

  const groupTitle = document.getElementById('add-group').value;
  let alreadyExists = false;

  myGroups.forEach((group) => {
    if (groupTitle === group.groupName) {
      alreadyExists = true;
    }
  });

  groupTitle !== ''
    ? !alreadyExists
      ? createGroup()
      : alert('This group already exists')
    : alert('Enter a Group Title');
};

export default validGroup;
