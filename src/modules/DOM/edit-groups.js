import validGroup from '../controllers/valid-group';
import createGroupForm from './groups-input';
import groupsNavbar from './groups-navbar';
import renderGroups from './render-groups';

const editGroups = () => {
  const navbar = document.getElementById('navbar');
  navbar.innerHTML = `${groupsNavbar()}`;

  const main = document.getElementById('main');
  main.innerHTML = `
    ${createGroupForm()}
    <div id='user-groups'>
    </div>
    `;

  renderGroups();

  const newGroup = document.getElementById('group-submit-btn');
  newGroup.addEventListener('click', validGroup);
};

export default editGroups;
