import { myGroups } from '../controllers/user-data';

const createTodoForm = () => {
  const main = document.getElementById('main');
  main.innerHTML = `
  <form id='todo-form'>
    <div id='title'>
      <label for='todo-title'>Add Todo</label>
      <input type='text' id='todo-title' name='todo-title' placeholder='Todo Name' required>
    </div>

    <div id='date'>
      <input type='date' id='todo-date' name='todo-date' placeholder='yyyy/mm/dd'>
    </div>

    <div id='group'>
      <select id='todo-group' class='form-select'>
        <option value='none' selected>Select Group</option>
        ${myGroups
          .map((item) => `<option value='${item}'>${item}</option>`)
          .join('')}
      </select>
    </div>

    <div id='add'>
      <button id='todo-submit'>
        <span class="material-icons">
          done
        </span></button>
    </div>
  </form>
  <div id='todos'></div>
  `;
};

export default createTodoForm;
