const createGroupForm = () => {
  return `
  <form id='group-form'>
    <div id='group-title'>
      <label for='add-group'>Add Group</label>
      <input type='text' id='add-group' name='add-group' placeholder='Group Name' required>
    </div>

    <div id='group-color'>
      <input type='color' id='color-picker' value='#${Math.floor(
        Math.random() * 16777215,
      ).toString(16)}'>
    </div>

    <div id='group-submit'>
      <button id='group-submit-btn'>
        <span class="material-icons">
          done
        </span></button>
    </div>
  </form>`;
};

export default createGroupForm;
