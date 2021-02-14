import navbar from './navbar';
import createTodoForm from './todo-input';

const initialLoad = () => {
  navbar();
  createTodoForm();
  // Display todos in default view
};

export default initialLoad;
