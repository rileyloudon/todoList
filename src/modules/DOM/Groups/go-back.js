import editGroups from './edit-groups-page';
import navbar from '../Todos/navbar';
import renderTodo from '../Todos/render-todo';
import createTodoForm from '../Todos/todo-form';
import comingUp from '../../controllers/Todos/sort-coming-up';
import dateAdded from '../../controllers/Todos/sort-date-added';
import validTodo from '../../controllers/Todos/check-valid-todo';
import viewGroup from '../../controllers/Groups/view-individual-group';
import closeNavbar from '../../controllers/close-navbar';

const back = () => {
  const backNavbar = document.getElementById('navbar');
  backNavbar.innerHTML = `
  <span class="material-icons" id='close'>close</span>
  ${navbar()}`;

  const main = document.getElementById('main');
  main.innerHTML = `
    ${createTodoForm()}
    <div id='todos'>
    </div>`;
  renderTodo();

  const addTodoBtn = document.getElementById('todo-submit');
  addTodoBtn.addEventListener('click', validTodo);

  const sortDateAdded = document.getElementById('date-added');
  sortDateAdded.addEventListener('click', dateAdded);

  const sortComingUp = document.getElementById('coming-up');
  sortComingUp.addEventListener('click', comingUp);

  const editGroupsBtn = document.getElementById('edit-groups');
  editGroupsBtn.addEventListener('click', editGroups);

  const changeGroup = document.getElementById('group-options');
  changeGroup.addEventListener('click', viewGroup);

  const closeBtn = document.getElementById('close');
  closeBtn.addEventListener('click', closeNavbar);

  document.getElementById('reorder').style.display = '';
  if (window.matchMedia('(max-width: 600px)').matches) {
    backNavbar.style.backgroundColor = '';
    closeNavbar();
  }
};

export default back;
