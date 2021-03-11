const cancelDelete = (deletedGroup) => {
  const selectedGroup = document.getElementsByClassName(
    `group-warning ${deletedGroup}`,
  )[0];

  selectedGroup.style.display = 'none';
};
export default cancelDelete;
