// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove Task event
  taskList.addEventListener('click', removeTask);
  // Clear Task even
  clearBtn.addEventListener('click', clearTasks);

}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Please add a Task');
  }

  e.preventDefault
}

// Add Task
function addTask(e){
  if(taskInput.value === ' '){
    alert('Add a Task')
  } else {

  // Create Li 
  const li = document.createElement('li')
  // Add Class
  li.className = 'collection-item';
  // Create text node and append to the Li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create New Link element
  const link = document.createElement('a');
  // Add Class
  link.className = 'delete-item secondary-content';
  // Add Icon html
  link.innerHTML = '<i class="fas fa-times"></i>';
  // Append the Link to the li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear Input
  taskInput.value = ' ';

  e.preventDefault();
  }
}

// Remove Task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear Tasks
function clearTasks() {
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}