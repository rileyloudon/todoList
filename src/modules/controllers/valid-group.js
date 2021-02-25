import createGroup from './create-group';

const validGroup = (e) => {
  e.preventDefault();

  if (document.getElementById('add-group').value !== '') {
    createGroup();
  } else {
    alert('Enter a Group Name');
  }
};

export default validGroup;
