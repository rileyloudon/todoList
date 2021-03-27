import renderTodo from '../../DOM/Todos/render-todo';
import closeNavbar from '../close-navbar';

const viewGroup = (e) => {
  let viewingGroup = 'View All';

  if (e.target.innerHTML === 'View All') {
    viewingGroup = 'View All';
    renderTodo(viewingGroup);
  } else if (e.target.classList.contains('group-navbar')) {
    viewingGroup = e.target.innerHTML;
    renderTodo(viewingGroup);
  }

  if (window.matchMedia('(max-width: 600px)').matches) closeNavbar();
};

export default viewGroup;
