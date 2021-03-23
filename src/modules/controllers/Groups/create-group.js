import { myGroups } from '../user-data';
import renderGroups from '../../DOM/Groups/render-groups';
import randomColor from './random-color';

class Group {
  constructor(groupName, groupColor) {
    this.groupName = groupName;
    this.groupColor = groupColor;
  }

  changeColor(chosenColor) {
    this.groupColor = chosenColor;
    return this.groupColor;
  }

  humanizeGroupName() {
    return this.groupName
      .replace(/%20/g, ' ')
      .replace(/%27/g, "'")
      .replace(/(\b[a-z](?=[a-z]{2})|^[a-z])/g, (letter) =>
        letter.toUpperCase()
      );
  }
}

const createGroup = () => {
  let name = document.getElementById('add-group').value;
  name = name
    .trim()

    .replace(/\s+/g, '%20')
    .replace(/[']+/g, '%27')
    .toLowerCase();

  const color = document.getElementById('color-picker').value;

  const group = new Group(name, color);

  myGroups.push(group);
  renderGroups();

  document.getElementById('group-form').reset();
  document.querySelector('input[type=color]').value = `#${randomColor()}`;
  localStorage.setItem('userGroups', JSON.stringify(myGroups));
};

export { createGroup, Group };
