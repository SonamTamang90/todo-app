// STORE THE INPUT VALUES
var data = [];


//ADD THE ITEMS IN THE UI
var addItem = function() {
    var input, item;
    //Get the input value
    input = document.querySelector('.todo__input').value;

    //Store in the array
    data.push(input);

    //Display in the UI
    if(data.length > 0) {
        var html, newHtml;
        html = `<div class="todo__list">
                    <i class="fas fa-check todo__icon"></i>
                    %description%
                </div>`;
        
        newHtml = html.replace('%description%', data);

        document.querySelector('.todo__item').insertAdjacentHTML('beforeend', newHtml);
    }
}

// SETUP A EVENT LISTENER
var displayItem = function() {
    document.addEventListener('keypress', function(e) {
        if(e.keyCode === 13 || e.which === 13) {
            addItem();
        }
    });
}

displayItem();