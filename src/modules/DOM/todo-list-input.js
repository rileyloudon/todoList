const createTodoForm = () => {
  const main = document.getElementById('main');
  main.innerHTML = `
  <form id='todo-form'>
    <div id='title'>
      <label for='todo-title'>Add Todo</label>
      <input type='text' id='todo-title' name='todo-title' placeholder='Todo Name'>
    </div>

    <div id='date'>
      <input type='date' id='todo-date' name='todo-date' placeholder='mm-dd-yyyy'>
    </div>

    <div id='group'>
      <select class='form-select' aria-label='select'>
        <option value='none' selected>Select Group</option>
        <option value='birthday'>Birthday</option>
      </select>
    </div>

    <div id='submit'>
      <button id='todo-submit'>
        <span class="material-icons">
          done
        </span></button>
    </div>

  </form>
  `;
};

export default createTodoForm;
