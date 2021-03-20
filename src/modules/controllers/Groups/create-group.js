import { myGroups } from '../user-data';
import renderGroups from '../../DOM/Groups/render-groups';
import randomColor from './random-color';
import Group from './class-Group';

const createGroup = () => {
  let name = document.getElementById('add-group').value;
  name = name
    .trim()

    .replace(/\s+/g, '%20')
    .replace(/[']+/g, '%27')
    .toLowerCase();

  let color = document.getElementById('color-picker').value;

  const group = new Group(name, color);

  myGroups.push(group);
  renderGroups();

  document.getElementById('group-form').reset();
  document.querySelector('input[type=color]').value = `#${randomColor()}`;
  localStorage.setItem('userGroups', JSON.stringify(myGroups));
};

export default createGroup;
