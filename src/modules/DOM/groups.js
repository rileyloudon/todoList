import { myGroups } from '../controllers/user-data';

const groups = () => {
  return `      
  <nav>
    <ul id='groups'>
      <h4>Groups</h4>
      <li><button type='button' class='btn'>Edit Groups</li>
      <div id='group-options'>
        <li><a href="#" id='all-todos' class='group'>View All</a></li>
        <li><a href="#" id='no-group' class='group'>No Group</a></li>
        ${myGroups
          .map(
            (item) =>
              `<li><a href="#" id='${item.toLowerCase()}' class='group'>${item}</a></li>`,
          )
          .join('')}
      </div>
    </ul>
  </nav>`;
};

export default groups;
