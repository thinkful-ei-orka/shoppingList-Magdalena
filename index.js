'use strict';
//get the new item that user submits
//add the item to the list
//check and uncheck items on the list by clicking the "Check" button
//permanently remove items from the list

function shoppingList() {
    console.log('hi');
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        let newItem = $('input').val();
        console.log('hello world');
        $('.shopping-list').append(`<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
        $('.shopping-item-toggle').click(function() {
            $(this).toggleClass('shopping-item__checked');
        });

        //$('.shopping-item-delete').remove('click');

    })
};

$(shoppingList);
console.log('hello');