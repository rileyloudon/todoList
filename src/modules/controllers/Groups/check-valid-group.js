import groupFormError from '../../DOM/Groups/groups-error-handler';
import { myGroups } from '../user-data';
import { createGroup } from './create-group';

const validGroup = (e) => {
  e.preventDefault();

  const groupTitle = document.getElementById('add-group').value.trim();
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

  if (groupTitle !== '') {
    if (!groupAlreadyExists) {
      createGroup();
      groupErrorBox.style.display = 'none';
    } else groupFormError('exists');
  } else groupFormError('title');
};

export default validGroup;
