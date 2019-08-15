function handleFormSubmit() {
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        const itemToAdd = $('#shopping-list-entry').val();

        const htmlString = `
        <li>
        <span class="shopping-item">${itemToAdd}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>  
        `
       $('.shopping-list').append(htmlString);
    })
}

function handleCheckClick() {
    $('.shopping-item-toggle').on('click', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    })
}

function handleDeleteClick() {
  $('.shopping-item-delete').on('click', function(event) {
    $(this).closest('li').remove();
  })
}

function main() {
    handleFormSubmit();
    handleCheckClick();
    handleDeleteClick();
}

$(main)