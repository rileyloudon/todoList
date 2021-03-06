const groupFormError = (error) => {
  const errorBox = document.getElementById('group-form-error');

  if (error === 'title') {
    errorBox.style.display = 'block';
    errorBox.innerHTML = `
    <p class='error-text'>Error: Please enter a group name.</p>
    `;
  }

  if (error === 'exists') {
    errorBox.style.display = 'block';
    errorBox.innerHTML = `
    <p class='error-text'>Error: Group already exists.</p>
    `;
  }
};

export default groupFormError;
