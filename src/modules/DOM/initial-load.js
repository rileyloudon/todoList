import navbar from './Todos/navbar';
import createTodoForm from './Todos/todo-input';

const initialLoad = () => {
  const container = document.getElementById('container');
  container.innerHTML = `
  <div class='row'>
    <div class="col-auto">
      <header id='navbar'>
        ${navbar()}
      </header>
    </div>
    <div class="col">
      <main id='main'>
        ${createTodoForm()}
        <div id='todos'></div>
      </main>
    </div
  </div>
  `;
  // Display saved todos in default view
};

export default initialLoad;
