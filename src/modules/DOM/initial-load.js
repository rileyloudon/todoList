import navbar from './Todos/navbar';
import createTodoForm from './Todos/todo-form';

const initialLoad = () => {
  const container = document.getElementById('container');
  container.innerHTML = `
  <div class='row'>
    <div class="col-auto">
      <span class="material-icons" id='reorder'>reorder</span>
      <header id='navbar'>
        <span class="material-icons" id='close'>close</span>        
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
};

export default initialLoad;
