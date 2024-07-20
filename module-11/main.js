var AddItemButton = document.getElementById('AddItem');
var DeleteItemButton = document.getElementById('DeleteItem');
var DisplayItemButton = document.getElementById('DisplayItem');
var listContainer = document.getElementById('listContainer');
var inputBox = document.getElementById('inputBox');



let todoItems = [];


function addItem() {
    const todoInput = document.getElementById('todoInput');
    const item = todoInput.value.trim();
    
 
    AddItemButton.addEventListener('click', function(){
	var paragraph = document.createElement('p')
	paragraph.innerText = inputBox.value;
	listContainer.appendChild(paragraph);
	})
}

function deleteItem() {
    const todoInput = document.getElementById('todoInput');
    const item = todoInput.value.trim();
    

    DeleteItemButton.addEventListener('click', function(){
	var paragraph = document.createElement('p')
	paragraph.innerText = inputBox.value;
	listContainer.appendChild(paragraph);
	})
}


function displayItems() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    
    DisplayButton.addEventListener('click', function(){
	var paragraph = document.createElement('p')
	paragraph.innerText = inputBox.value;
	listContainer.appendChild(paragraph);
	})

    

    for (let i = 0; i < todoItems.length; i++) {
        const div = document.createElement('div');
        div.textContent = todoItems[i];
        todoList.appendChild(div);
    }
}

