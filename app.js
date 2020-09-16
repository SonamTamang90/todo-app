// TODO CONTROLLER
var todoController = (function() {
    var todoArray = [];

    return {
        addTodoItem: function(item) {
            todoArray.push(item);
            
            var newItem = todoArray.map(function(cur) {
                return cur;
            });

            return newItem;
        },

        test: function() {
            return todoArray;
        }
    }

})();


// UI CONTROLLER
var UIController = (function() {

    var DOMstring = {
        toDoValue: '.todo__input',
        todoContainer: '.todo__item'
    };

    return {
        getInput: function() {
            return {
                toDos: document.querySelector(DOMstring.toDoValue).value
            }
        },

        displayTodoItem: function(list) {
            var html, newHtml, element;
            element = DOMstring.todoContainer;

            html = `<div class="todo__list">
                        <i class="fas fa-check todo__icon"></i>
                        %description%
                    </div>`;

            newHtml = html.replace('%description%', list);

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        }
    }

})();


// GLOABAL APP CONTROLLER
var controller = (function(todoCtrl, UICtrl) {

    // Add Todo Item
    var addItem = function() {

        //1. Get the input field value
        var input = UICtrl.getInput();
        console.log(input);

        //2. Add to the todo controller
        var newItem = todoCtrl.addTodoItem(input.toDos);

        //3. Display in the UI.
        UICtrl.displayTodoItem(newItem);
    };

    // Setup Event Listener
    var setEventListener = function() {
        document.addEventListener('keypress', function(e) {
            if(e.keyCode === 13 || e.which === 13) {
                addItem();
            }
        });
    };

    return {
        init: function() {
            setEventListener();
        }
    }

})(todoController, UIController);

controller.init();

