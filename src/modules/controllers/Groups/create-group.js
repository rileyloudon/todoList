import { myGroups } from '../user-data';
import renderGroups from '../../DOM/Groups/render-groups';

const createGroup = () => {
  class Group {
    constructor(groupName, groupColor) {
      this.groupName = groupName;
      this.groupColor = groupColor;
    }

    changeColor(chosenColor) {
      return (this.groupColor = chosenColor);
    }

    deleteGroup() {
      myGroups = myGroups.filter((e) => e !== this);
    }

    humanizeGroupName() {
      return this.groupName
        .replace(/-/g, ' ')
        .replace(/(?: |\b)(\w)/g, function(letter) {
          return letter.toUpperCase();
        });
    }
  }

  let name = document.getElementById('add-group').value;
  name = name.replace(/\s+/g, '-').toLowerCase();

  let color = document.getElementById('color-picker').value;

  const group = new Group(name, color);

  myGroups.push(group);
  renderGroups();

  document.getElementById('group-form').reset();
};

export default createGroup;
