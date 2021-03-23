import closeNavbar from './close-navbar';

const displayNavbar = () => {
  const color = window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'var(--light-main-color)'
    : 'var(--dark-main-color)';

  const navbar = document.getElementById('navbar');
  navbar.style.width = '152px';
  navbar.style.borderRight = `1px solid ${color}`;

  const clickOutsideNav = document.getElementById('navbar');

  const outsideClick = (e) => {
    if (
      !clickOutsideNav.contains(e.target) &&
      !e.target.classList.contains('material-icons')
    ) {
      closeNavbar();
      document.removeEventListener('click', outsideClick);
    }
  };

  document.addEventListener('click', outsideClick);
};

export default displayNavbar;
