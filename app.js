// ES6 TODO APP

// HOLDING ALL DOM STRINGS
var DOMstrings = {
    inputActivity: '.todo__activity',
    inputTiming: '.todo__timing',
    listContainer: '.todo__list'
}

/*----------------------------------------------------------------------------
  IMPLEMENTAION OF LOGIC FOR TODO APP
-----------------------------------------------------------------------------*/
//FUNCTION CONSTRUCTOR
let Activity = function(id, item, timing) {
    this.id = id;
    this.item = item;
    this.timing = timing;
};

// DATA STRUCTURES FOR STORING TODO ACTIVITIES
var data = {
    todos: {
        todoItems: []
    }
};

//FUNCTION TO ADD A TODO ITEM INTO THE DATA STRUCTURES
const addTodo = (item, time) => {
    let ID, newItem;
    //Assigning an ID for the todo item.
    if(data.todos.todoItems.length > 0) {
        ID = data.todos.todoItems[data.todos.todoItems.length - 1].id + 1;
    }else {
        ID = 0;
    };

    newItem = new Activity(ID, item, time);
    data.todos.todoItems.push(newItem);

    return newItem;
};

const deleteTodo = (ID) => {
    let ids, index;

    ids = data.todos.todoItems.map((cur) => {
        return cur.id;
    });

    index = ids.indexOf(ID);
    
    data.todos.todoItems.splice(index, 1);
};

/*----------------------------------------------------------------------------
  DISPLAYING THE TODO ACTIVITIES ON USER INTERFACE
-----------------------------------------------------------------------------*/

// FUNCTION TO DISPLAY ITEM IN THE UI
const displayTodo = (todo) => {
    let html, newHtml;

    html = `<div class="todo__item--container" id="item-%id%">
                <div class="todo__item">
                    <div class="todo__item-group">
                        <i class="ion-ios-checkmark-empty todo__item-icon"></i>
                        %activity%
                    </div>
                    <div class="todo__item-group">
                        <i class="ion-ios-alarm-outline todo__item-icon"></i>
                        %timing% AM
                    </div>
                </div>
                <div class="todo__delete">
                    <button id="btn--delete">Delete</button>
                </div>
                <div class="todo__edit">
                    <button id="btn--edit">Edit</button>
                </div>
            </div>`;

    newHtml = html.replace('%id%', todo.id);
    newHtml = newHtml.replace('%activity%',  todo.item);
    newHtml = newHtml.replace('%timing%',  todo.timing);

    document.querySelector(DOMstrings.listContainer).insertAdjacentHTML('beforeend', newHtml);
};

const deleteListItem = (listID) => {
    let element = document.getElementById(listID);
    element.parentNode.removeChild(element);
};

// CLEARING THE INPUT FIELDS
// const clearInput = () => {
//    input.value = "";
// }


/*----------------------------------------------------------------------------
  GLOBAL APP CONTROLLER FOR THE TODO APP
-----------------------------------------------------------------------------*/
//FUNCTION TO GET THE VALUES FROM INPUTS
const getInput = () => {
    return {
        activity: document.querySelector(DOMstrings.inputActivity).value,
        timing: document.querySelector(DOMstrings.inputTiming).value
    }
}

//FUNCTION TO ADD A TODO ITEM 
const ctrlAddTodo = () => {

    //1. Get the input values
    var input = getInput();

    //2. Add to the data structures
    let newItem = addTodo(input.activity, input.timing);

    //3. Push into the Local Storages


    //4. Display in the UI 
    displayTodo(newItem);

    //5. Clear the fields 
    //clearInput();
};

//FUNCTION TO DELETE A TODO ITEM
const ctrlDeleleTodo = e => {

    let fields, splitID, ID;

    fields = e.target.parentNode.parentNode.id;
    console.log(fields);
    splitID = fields.split('-');

    ID = splitID[1];
    //console.log(ID);

    //1. Delete an todo item from data structures
    deleteTodo(ID);

    //2. Remove todo item from the UI.
    deleteListItem(fields);

};

// SETTING EVENT LISTENER(GLOBAL APP CONTROLLER)



const setEventListener = () => {
    document.addEventListener('keypress', e => {
        if(e.keyCode === 13) {
            ctrlAddTodo();
        }
    });

    document.querySelector('.todo__list').addEventListener('click', ctrlDeleleTodo);
};

// INITIAZING THE APP
setEventListener();