import createGroupForm from './groups-input';
import renderGroups from './render-groups';

const editGroups = () => {
  const navbar = document.getElementById('navbar');
  navbar.innerHTML = '';

  const main = document.getElementById('main');
  main.innerHTML = `
    ${createGroupForm()}
    ${renderGroups()}
    `;
};

export default editGroups;
