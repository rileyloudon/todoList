import renderTodo from '../../DOM/Todos/render-todo';
import { viewingGroup } from '../user-data';

const viewGroup = (e) => {
  if (e.target.innerHTML === 'View All') {
    viewingGroup = 'View All';
    renderTodo();
  } else if (e.target.classList.contains('group')) {
    viewingGroup = e.target.innerHTML;
    renderTodo();
  }
};

export default viewGroup;
