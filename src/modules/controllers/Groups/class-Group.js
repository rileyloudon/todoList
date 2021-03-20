import { myGroups } from '../user-data';

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

export default Group;
