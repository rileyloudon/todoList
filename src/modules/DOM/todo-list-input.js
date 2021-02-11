const createTodoForm = () => {
  const main = document.getElementById('main');
  main.innerHTML = `
  <form id='todo-form'>
    <div id='title'>
      <label for='todo-title'>Add Todo</label>
      <input type='text' id='todo-title' name='todo-title' placeholder='Todo Name'>
    </div>

    <div id='date'>
      <label for='todo-date'></label>
      <input type='date' id='todo-date' name='todo-date' placeholder='yyyy-mm-dd'>
    </div>

    <div id='group'
      <label for='todo-group'></label>
      <select id='todo-group' name='todo-group'>
        <option value='none'>None</option>
        <option value='birthday'>Birthday</option>
      </select>
    </div>

    <div id='confirm'>
      <button id='todo-submit'>Add</button>
    </div>

  </form>
  `;
};

export default createTodoForm;
