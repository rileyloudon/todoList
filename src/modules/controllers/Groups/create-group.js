import { myGroups } from '../user-data';
import renderGroups from '../../DOM/Groups/render-groups';
import randomColor from './random-color';

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
        .replace(/%20/g, ' ')
        .replace(/%27/g, "'")
        .replace(/(\b[a-z](?=[a-z]{2})|^[a-z])/g, (letter) =>
          letter.toUpperCase(),
        );
    }
  }

  let name = document.getElementById('add-group').value;
  name = name
    .replace(/\s+/g, '%20')
    .replace(/[']+/g, '%27')
    .toLowerCase();

  let color = document.getElementById('color-picker').value;

  const group = new Group(name, color);

  myGroups.push(group);
  renderGroups();

  document.getElementById('group-form').reset();
  document.querySelector('input[type=color]').value = `#${randomColor()}`;
};

export default createGroup;
