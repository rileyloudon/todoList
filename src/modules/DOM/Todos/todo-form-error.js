const todoFormError = (error) => {
  const errorBox = document.getElementById('todo-form-error');

  if (error === 'title') {
    errorBox.style.display = 'block';
    errorBox.innerHTML = `
    <p class='error-text'>Error: Please enter a todo name.</p>
    `;
  }

  if (error === 'date') {
    errorBox.style.display = 'block';
    errorBox.innerHTML = `
    <p class='error-text'>Error: You can't complete a todo in the past!</p>
    `;
  }

  if (error === 'time') {
    errorBox.style.display = 'block';
    errorBox.innerHTML = `
    <p class='error-text'>Error: Enter a time in 24hr format (00:00 - 23:59).</p>
    `;
  }

  if (error === 'exists') {
    errorBox.style.display = 'block';
    errorBox.innerHTML = `
    <p class='error-text'>Error: Todo already exists.</p>
    `;
  }
};

export default todoFormError;
