import { myGroups } from './user-data';
import renderGroups from '../DOM/render-groups';

const createGroup = () => {
  class Group {
    constructor(groupName, groupColor) {
      this.groupName = groupName;
      this.groupColor = groupColor;
    }
  }

  let name = document.getElementById('add-group').value;
  let color = document.getElementById('color-picker').value;

  const group = new Group(name, color);

  myGroups.unshift(group);
  renderGroups();

  document.getElementById('group-form').reset();
};

export default createGroup;
