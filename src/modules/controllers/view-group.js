import renderTodo from '../DOM/render-todo';
import { viewingGroup } from './user-data';

const viewGroup = (e) => {
  if (e.target.innerHTML === 'View All') {
    viewingGroup = 'view all';
    renderTodo();
  } else if (e.target.classList.contains('group')) {
    viewingGroup = e.target.innerHTML;
    renderTodo();
  }
};

export default viewGroup;
