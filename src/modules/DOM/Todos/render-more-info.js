const renderMoreInfo = (item) => {
  const itemDropDown = item.children[1];

  if (itemDropDown.style.display === 'none')
    itemDropDown.style.display = 'grid';
  else itemDropDown.style.display = 'none';
};

export default renderMoreInfo;
