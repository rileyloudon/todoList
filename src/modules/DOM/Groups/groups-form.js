import randomColor from '../../controllers/Groups/random-color';

const createGroupForm = () => `
  <form id='group-form'>
    <div id='group-title'>
      <label for='add-group'>Add Group</label>
      <input type='text' id='add-group' name='add-group' placeholder='Group Name' maxlength='12' required />
    </div>

    <label for='color-picker' id='group-color-helper'>Group Color:</label>
    
    <div id='group-color'>
      <input type='color' id='color-picker' value='#${randomColor()}' />
    </div>

    <div id='group-submit'>
      <button id='group-submit-btn'>
        <span class="material-icons">
          done
        </span></button>
    </div>
  </form>
  <div id='group-form-error' style='display: none'></div>
  `;

export default createGroupForm;
