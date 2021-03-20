import renderTodo from '../../DOM/Todos/render-todo';
import closeNavbar from '../close-navbar';
import { viewingGroup } from '../user-data';

const viewGroup = (e) => {
  if (e.target.innerHTML === 'View All') {
    viewingGroup = 'View All';
    renderTodo();
  } else if (e.target.classList.contains('group-navbar')) {
    viewingGroup = e.target.innerHTML;
    renderTodo();
  }

  if (window.matchMedia('(max-width: 600px)').matches) closeNavbar();
};

export default viewGroup;
