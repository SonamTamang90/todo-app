
var form = document.querySelector('.todo__form');
var input = document.querySelector('.todo__input');
var list = document.querySelector('.todo__list');
var item = document.querySelector('.todo__item');


//ARRAY FOR STORAGE
var todosArray = [];

//LOCAL STORAGE FUNCTIONALITY
var todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos', todosArray)) : [];

var storage = JSON.parse(localStorage.getItem('todos', todosArray));



// ADD ITEM 
var addTodo = function(todo) {
    var newItem, item;
    item = ' <div class="todo__item"><i class="fas fa-check todo__icon"></i>%description%</div>';
    newItem = item.replace('%description%', todo);
    list.insertAdjacentHTML('beforeend', newItem)
};

for(var i = 0; i < storage.length; i++) {
    addTodo(storage[i]);
};

//SET EVENT LISTENER
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Add todos in the array
    todosArray.push(input.value);

    //Store in the storage.
    localStorage.setItem('todos', JSON.stringify(todosArray));

    //Add new item in UI
    addTodo(input.value);

    //Clear the input field
    input.value = '';
});