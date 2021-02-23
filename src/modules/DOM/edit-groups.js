import createGroupForm from './groups-input';
import groupsNavbar from './groups-navbar';
import renderGroups from './render-groups';

const editGroups = () => {
  const navbar = document.getElementById('navbar');
  navbar.innerHTML = `${groupsNavbar()}`;

  const main = document.getElementById('main');
  main.innerHTML = `
    ${createGroupForm()}
    ${renderGroups()}
    `;
};

export default editGroups;
