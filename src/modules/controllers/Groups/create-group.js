import { myGroups } from '../user-data';
import renderGroups from '../../DOM/Groups/render-groups';

const createGroup = () => {
  class Group {
    constructor(groupName, groupColor) {
      this.groupName = groupName;
      this.groupColor = groupColor;
    }

    deleteGroup() {
      myGroups = myGroups.filter((e) => {
        return e !== this;
      });
    }

    changeColor(chosenColor) {
      return (this.groupColor = chosenColor);
    }

    formatGroup() {}
  }

  let name = document.getElementById('add-group').value;
  let color = document.getElementById('color-picker').value;

  const group = new Group(name, color);

  myGroups.push(group);
  renderGroups();

  document.getElementById('group-form').reset();
};

export default createGroup;
