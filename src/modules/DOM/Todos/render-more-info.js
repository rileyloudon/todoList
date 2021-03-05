const renderMoreInfo = (item) => {
  item = item.children[1];

  item.style.display === 'none'
    ? (item.style.display = 'grid')
    : (item.style.display = 'none');
};

export default renderMoreInfo;
