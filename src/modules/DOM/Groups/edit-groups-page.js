import back from '../../controllers/Groups/go-back';
import validGroup from '../../controllers/Groups/check-valid-group';
import createGroupForm from './groups-form';
import groupsNavbar from './groups-navbar';
import renderGroups from './render-groups';

const editGroups = () => {
  const navbar = document.getElementById('navbar');
  navbar.innerHTML = `${groupsNavbar()}`;

  const main = document.getElementById('main');
  main.innerHTML = `
    ${createGroupForm()}
    <div id='user-groups'></div>
    `;

  renderGroups();

  const createNewGroup = document.getElementById('group-submit-btn');
  createNewGroup.addEventListener('click', validGroup);

  const backBtn = document.getElementById('back');
  backBtn.addEventListener('click', back);
};

export default editGroups;
