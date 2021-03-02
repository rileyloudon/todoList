import editGroups from '../../DOM/Groups/edit-groups-page';
import navbar from '../../DOM/Todos/navbar';
import renderTodo from '../../DOM/Todos/render-todo';
import createTodoForm from '../../DOM/Todos/todo-form';
import comingUp from '../Todos/sort-coming-up';
import dateAdded from '../Todos/sort-date-added';
import validTodo from '../Todos/check-valid-todo';
import viewGroup from './view-individual-group';

const back = () => {
  const backNavbar = document.getElementById('navbar');
  backNavbar.innerHTML = `${navbar()}`;

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
};

export default back;
