// Create a todo list 
// Check todo.png for an example
// You should be able to add items to the todo list 
// You should be able to remove items from the todo list

// Bonus: If you add an item, validate the input to check if it contains more than 3 characters
//        If NOT inform the user


let toDoList = document.querySelector('.list');

const creatTaskButton = document.querySelector('.add');

let message = document.querySelector('.message');


creatTaskButton.addEventListener('click', e => {
  let inputValue = document.querySelector('#todo').value;

  message.innerHTML = '';

  if (inputValue.length > 3) {
    creatTask(inputValue);

    // clear the input field
    document.querySelector('#todo').value = '';

    document.querySelectorAll('.remove-item').forEach(icon => {
      icon.addEventListener('click', e => {
        e.target.parentNode.remove();

        toDoList = document.querySelector('.list');
      });
    });

  } else {
    message.style.opacity = '1';
    message.innerHTML = 'You need more then 3 characters to creat a task!';
    setTimeout('message.style.opacity = "0"', 2500);
  }

});

function creatTask(text) {
  let task = document.createElement('li');
  task.classList.add('list-item');
  task.innerHTML = `${text} <i class="fas fa-dumpster remove-item"></i>`;
  toDoList.appendChild(task);
}
