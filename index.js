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
    });
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
      $(this).closest('li').remove();
    });
  
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });


    };

    $(shoppingList);
    console.log('hello');
