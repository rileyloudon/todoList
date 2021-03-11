import { myGroups } from '../../controllers/user-data';

const groups = () => {
  return `      
  <nav>
    <ul id='groups'>
      <h4 id='groups-header'>Groups</h4>
      <li><button type='button' id='edit-groups' class='btn'>Edit Groups</li>
      <div id='group-options'>
        <li><a href="#" class='group-navbar view-all-todos btn default-border'>View All</a></li>
        <li><a href="#" class='group-navbar btn default-border'>No Group</a></li>
        ${myGroups
          .map(
            (item) =>
              `<li><a href="#" class='group-navbar btn' style='border:1px solid ${
                item.groupColor
              }; color:${
                item.groupColor
              }'>${item.humanizeGroupName()}</a></li>`,
          )
          .join('')}
      </div>
    </ul>
  </nav>`;
};

export default groups;
