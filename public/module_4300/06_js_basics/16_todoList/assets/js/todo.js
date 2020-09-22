const creatTaskButton = document.querySelector('.add');
const message = document.querySelector('.message');
const clearButton = document.querySelector('#clearComplete');
const markButton = document.querySelector('#markAllComplete');

let todoList = new Array();
getTodos();
populateList();

creatTaskButton.addEventListener('click', e => {
  addTodo();
});

clearButton.addEventListener('click', e => {
  e.preventDefault();
  todoList = todoList.filter(task => task.complete == false);
  updateStorage();
  populateList();
});

markButton.addEventListener('click', e => {
  e.preventDefault();

  todoList = todoList.forEach(task => {
    task.complete = true;
  });

  populateList();
  updateStorage();
})

function getTodos() {

  // If there are items in the local storage
  if (localStorage.getItem('todos')) {
    todoList = JSON.parse(localStorage.getItem('todos'));
  } else {
    // There are NO items in the local storage
    return 'You do not have any todos in storage'
  }
}

function addTodo() {
  // Only add a to-do if there is a value in the input
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

function updateBoxes() {
  let boxes = document.querySelectorAll('.todoCheck');

  boxes.forEach((box, i) => {
    box.addEventListener('click', e => {
      box.classList.toggle('false');

      if (box.classList.contains('false')) {
        todoList[i].complete = false;
      } else {
        todoList[i].complete = true;
      }

      updateStorage()
    })
  })
}

// populate the list in the HTML
function populateList() {
  // delete the current list
  const list = document.querySelector('.list');
  list.innerHTML = '';

  if (todoList) {
    todoList.forEach(task => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-item');
      listItem.innerHTML = `
<div class="todoText">${task.text}</div>
<div class="todoCheck ${task.complete == false ? 'false' : ''}"></div>
`
      list.appendChild(listItem)
    })
  }
  updateBoxes();
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