import { myGroups } from '../../controllers/user-data';

const createTodoForm = () => {
  // Default todo due date
  let todayDate = new Date().getDate() + 1;
  todayDate = todayDate < 1 ? `0${todayDate}` : todayDate;

  let todayMonth = new Date().getMonth() + 1;
  todayMonth = todayMonth < 10 ? `0${todayMonth}` : todayMonth;

  const todayYear = new Date().getFullYear();

  return `
  <form id='todo-form'>
    <div id='title'>
      <label for='todo-title'>Add Todo</label>
      <input type='text' id='todo-title' name='todo-title' placeholder='Todo Name' required>
    </div>

    <div id='date'>
      <input type='date' id='todo-date' name='todo-date' placeholder='yyyy/mm/dd' value='${todayYear}-${todayMonth}-${todayDate}'>
    </div>

    <div id='time'>
      <input type='time' id='todo-time' name='todo-time' placeholder='00:00' value='00:00'>
    </div>

    <div id='group'>
      <select id='todo-group' class='form-select'>
        <option value='No Group' selected>Group</option>
        ${myGroups
          .map(
            (item) =>
              `<option value='${
                item.groupName
              }'>${item.humanizeGroupName()}</option>`
          )
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
  <div id='todo-form-error' style='display: none'></div>`;
};

export default createTodoForm;
