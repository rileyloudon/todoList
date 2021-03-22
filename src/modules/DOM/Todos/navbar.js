import sort from './sort';
import groups from '../Groups/groups';

const navbar = () => `
    ${sort()} 
    ${groups()}
  `;

export default navbar;
