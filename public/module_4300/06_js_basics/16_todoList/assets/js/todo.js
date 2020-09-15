
const creatTaskButton = document.querySelector('.add');
const message = document.querySelector('.message');

let todoList = new Array;
getTodos();
populateList();

creatTaskButton.addEventListener('click', e => {
  addTodo();
});

function getTodos() {

  // If there are items in the local storage
  if (localStorage.getItem('todos')){
    todoList = JSON.parse(localStorage.getItem('todos'));
  } else {
    // There are NO items in the local storage
    return 'You do not have any todos in storage'
  }
}

function addTodo() {
  // Only add a todo if there is a value in the input
  const newTask = document.querySelector('#todoInput').value;

  if (newTask) {
    // create an opbject with text and status
    const todoObj = {
      text: newTask,
      complete: false
    }

    // insert new object in the array
    todoList.push(todoObj);

    // update local storage
    updateStorage();
    // change the HTML
    populateList();
  } else {
    // display error, input is empty
    return 'You must write something in the box'
  }
}

function updateStorage() {
  localStorage.setItem('todos', JSON.stringify(todoList));
}

// populate the list in the HTML
function populateList() {
  // delete the current list
  const list = document.querySelector('.list');
  list.innerHTML = '';

  if (todoList) {
    todoList.forEach(task => {
      const todoWrapper = document.createElement('li');
      todoWrapper.classList.add('todoWrapper');
      todoWrapper.innerHTML = `
      <div class="todoText">${task.text}</div>
      <div class="todoCheck">${task.complete}</div>
`
      list.appendChild(todoWrapper)
    })
  }
}


/* ---------------------------------------------------- */
// save stuff into local storage
// localStorage.setItem('foofoo', 'barbar');
//
// console.log(localStorage.getItem('foofoo'));
//
// const myObject = {
//   color: 'red',
//   age: 24
// }
// localStorage.setItem('myObject', JSON.stringify(myObject));
//
// console.log(localStorage.getItem('myObject'));