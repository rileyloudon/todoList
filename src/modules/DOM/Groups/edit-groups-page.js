import back from './go-back';
import validGroup from '../../controllers/Groups/check-valid-group';
import createGroupForm from './groups-form';
import groupsNavbar from './groups-navbar';
import renderGroups from './render-groups';
import closeNavbar from '../../controllers/close-navbar';

const editGroups = () => {
  document.getElementById('reorder').style.display = 'none';

  const navbar = document.getElementById('navbar');
  navbar.innerHTML = ``;

  const main = document.getElementById('main');
  main.innerHTML = `
    ${groupsNavbar()}
    ${createGroupForm()}
    <div id='user-groups'></div>
    `;

  renderGroups();

  const createNewGroup = document.getElementById('group-submit-btn');
  createNewGroup.addEventListener('click', validGroup);

  const backBtn = document.getElementById('back');
  backBtn.addEventListener('click', back);

  if (window.matchMedia('(max-width: 600px)').matches) {
    closeNavbar();
  }
};

export default editGroups;
