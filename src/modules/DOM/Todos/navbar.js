import sort from './sort';
import groups from '../Groups/groups';

const navbar = () => {
  return `
    ${sort()} 
    ${groups()}
  `;
};
export default navbar;
