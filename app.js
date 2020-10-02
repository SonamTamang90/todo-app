// ES6 TODO APP
// ELEMENT LIST 
let input = document.querySelector('.todo__input');
let list = document.querySelector('.todo__list');

/*----------------------------------------------------------------------------
  IMPLEMENTAION OF LOGIC FOR TODO APP
-----------------------------------------------------------------------------*/
//FUNCTION CONSTRUCTOR
let Activity = function(id, item) {
    this.id = id;
    this.item = item;
};

// DATA STRUCTURES FOR STORING TODO ACTIVITIES
var data = {
    todos: {
        todoItems: []
    }
};

//FUNCTION TO ADD A TODO ITEM INTO THE DATA STRUCTURES
let addTodo = (item) => {
    let ID, newItem;
    //Assigning an ID for the todo item.
    if(data.todos.todoItems.length > 0) {
        ID = data.todos.todoItems[data.todos.todoItems.length - 1].id + 1;
    }else {
        ID = 0;
    };

    newItem = new Activity(ID, item);
    data.todos.todoItems.push(newItem);

    return newItem;
};

/*----------------------------------------------------------------------------
  DISPLAYING THE TODO ACTIVITIES ON USER INTERFACE
-----------------------------------------------------------------------------*/

// FUNCTION TO DISPLAY ITEM IN THE UI
const displayTodo = (todo) => {
    let html, newHtml;

    html = `<div class="todo__item--container">
                <div class="todo__item">
                    <i class="ion-ios-checkmark-empty todo__item-icon"></i>
                    %activity%
                </div>
                <div class="todo__delete">
                    <button id="btn--delete">Delete</button>
                </div>
            <div class="todo__edit">
                    <button id="btn--edit">Edit</button>
                </div>
            </div>`;

    newHtml = html.replace('%activity%',  todo.item);

    list.insertAdjacentHTML('beforeend', newHtml);
}

//FUNCTION TO ADD A TODO ITEM 
const ctrlAddTodo = () => {

    //1. Get the input values
    let activity = input.value;

    //2. Add to the data structures
    let newItem = addTodo(activity);

    //3. Push into the Local Storages


    //4. Display in the UI 
    displayTodo(newItem);


    //5. Clear the fields 
};


/*----------------------------------------------------------------------------
  GLOBAL APP CONTROLLER FOR THE TODO APP
-----------------------------------------------------------------------------*/

// SETTING EVENT LISTENER(GLOBAL APP CONTROLLER)
const setEventListener = () => {
    document.addEventListener('keypress', e => {
        if(e.keyCode === 13) {
            ctrlAddTodo();
        }
    })
};

// INITIAZING THE APP
setEventListener();