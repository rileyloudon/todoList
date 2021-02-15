import sort from './sort';
import groups from './groups';

const navbar = () => {
  return `
    ${sort()} 
    ${groups()}
  `;
};
export default navbar;
