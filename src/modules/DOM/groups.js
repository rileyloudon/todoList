import { myGroups } from '../controllers/user-data';

const groups = () => {
  return `      
  <nav>
  <ul id='groups'>
    <h4>Groups</h4>
      <li><button type='button' class='btn'>Edit Groups</li>
      <li><a href="#" id='all-todos'>View All</a></li>
      ${myGroups
        .map((item) => `<li><a href="#" id='${item}'>${item}</a></li>`)
        .join('')}
    </ul>
  </nav>`;
};

export default groups;
