import { myGroups } from '../../controllers/user-data';

const groups = () => {
  return `      
  <nav>
    <ul id='groups'>
      <h4>Groups</h4>
      <li><button type='button' id='edit-groups' class='btn'>Edit Groups</li>
      <div id='group-options'>
        <li><a href="#" class='group'>View All</a></li>
        <li><a href="#" class='group'>No Group</a></li>
        ${myGroups
          .map(
            (item) =>
              `<li><a href="#" class='group'>${item.groupName}</a></li>`,
          )
          .join('')}
      </div>
    </ul>
  </nav>`;
};

export default groups;
