let todoItems = [];

function addItem() {
    let input = document.getElementById('todoInput').value;
    if (input.trim() !== '') {
        todoItems.push(input);
        alert('Item: ' + input + ' Added at position ' + todoItems.length);
        document.getElementById('todoInput').value = ''; 
    } else {
        alert('Please enter a valid to-do item.');
    }
}

function deleteItem() {
    if (todoItems.length > 0) {
        let removedItem = todoItems.pop();
        alert('Deleted: ' + removedItem);
    } else {
        alert('No items to be deleted.');
    }
}

function displayItem() {
    let displayArea = document.getElementById('displayArea');
    displayArea.innerHTML = '';
    
    if (todoItems.length > 0) {
        for (let i = 0; i < todoItems.length; i++) {
            let listItem = document.createElement('div');
            listItem.textContent = (i + 1) + '. ' + todoItems[i];
            displayArea.appendChild(listItem);
        }
    } else {
        displayArea.innerHTML = 'No items to be shown';
    }
}
