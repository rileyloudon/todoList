import { parseISO } from 'date-fns';
import initialLoad from './modules/DOM/initial-load';
import renderTodo from './modules/DOM/Todos/render-todo';
import validTodo from './modules/controllers/Todos/check-valid-todo';
import dateAdded from './modules/controllers/Todos/sort-date-added';
import comingUp from './modules/controllers/Todos/sort-coming-up';
import editGroups from './modules/DOM/Groups/edit-groups-page';
import viewGroup from './modules/controllers/Groups/view-individual-group';
import displayNavbar from './modules/controllers/display-navbar';
import closeNavbar from './modules/controllers/close-navbar';
import { myGroups, myTodos } from './modules/controllers/user-data';
import { Todo } from './modules/controllers/Todos/create-todo';
import { Group } from './modules/controllers/Groups/create-group';

if (localStorage.getItem('userGroups')) {
  const savedGroups = JSON.parse(localStorage.getItem('userGroups'));
  savedGroups.forEach((item) => {
    const group = new Group(item.groupName, item.groupColor);
    myGroups.push(group);
  });
  initialLoad();
} else initialLoad();

if (localStorage.getItem('userTodos')) {
  const savedTodos = JSON.parse(localStorage.getItem('userTodos'));
  savedTodos.forEach((item) => {
    const todo = new Todo(
      item.name,
      parseISO(item.dateAdded),
      item.dueDate === '∞' ? '∞' : parseISO(item.dueDate),
      item.group
    );
    myTodos.push(todo);
  });
  renderTodo();
}

window
  .matchMedia(`(prefers-color-scheme: light)`)
  .addEventListener('change', renderTodo);

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

const hamburger = document.getElementById('reorder');
hamburger.addEventListener('click', displayNavbar);

const closeBtn = document.getElementById('close');
closeBtn.addEventListener('click', closeNavbar);
window.addEventListener('orientationchange', closeNavbar);
window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 600px)').matches) closeNavbar();
});
