import sort from './sort';
import groups from './groups';

const navbar = () => {
  const content = document.getElementById('content');
  content.innerHTML = `
  <header>
    ${sort()}
    ${groups()}
  </header>
  <main id='main'>
  </main>
  `;
};

export default navbar;
