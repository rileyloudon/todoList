import groupFormError from '../../DOM/Groups/groups-error-handler';
import { myGroups } from '../user-data';
import createGroup from './create-group';

const validGroup = (e) => {
  e.preventDefault();

  const groupTitle = document.getElementById('add-group').value;
  let groupAlreadyExists = false;

  const groupErrorBox = document.getElementById('group-form-error');

  myGroups.forEach((group) => {
    if (
      groupTitle === group.groupName ||
      groupTitle === group.humanizeGroupName()
    ) {
      groupAlreadyExists = true;
    }
  });

  groupTitle !== ''
    ? !groupAlreadyExists
      ? (createGroup(), (groupErrorBox.style.display = 'none'))
      : groupFormError('exists')
    : groupFormError('title');
};

export default validGroup;
