

const inputEle = document.getElementById('taskinput');
const buttonEle = document.getElementById('button');
const ulEle = document.getElementById('tasklist');
const doneEle = document.getElementById('donelist');


buttonEle.addEventListener('click', addTask);

function addTask() {
    let taskValue = inputEle.value;

    if (taskValue !== '') {
        // Create a new list item

        const parentDiv=document.createElement('div');
        parentDiv.style.display='flex';
        const doingList = document.createElement('li');
        doingList.textContent=taskValue;
        doingList.style.fontStyle = 'italic';
        doingList.style.opacity = 0.6;
        doingList.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
        doingList.style.listStyleType = 'decimal';

        // Create a div to add input button and delete button
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('buttonclass');
        
        // Create input button
        const inputButton = document.createElement('button');
        inputButton.innerHTML = '<i class="fas fa-check"></i>';

        inputButton.style.backgroundColor = 'inherit'; 
        inputButton.style.transform='rotate(-45deg)';
        inputButton.addEventListener('click', function () {
            // Move the item to the "Done" list when the input button is clicked
            ulEle.removeChild(parentDiv);
            addTaskToDoneList(doingList.textContent);
        });
       
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.style.backgroundColor = 'inherit'; 
        deleteButton.style.transform='rotate(-45deg)';
        deleteButton.addEventListener('click', function () {
            // Remove the item when the delete button is clicked
            ulEle.removeChild(parentDiv);
        });
        // Append buttons to the div
        taskContainer.appendChild(inputButton);
        taskContainer.appendChild(deleteButton);
        
        parentDiv.appendChild(doingList);
        parentDiv.appendChild(taskContainer);
        // Append the new list item to the task list
        ulEle.appendChild(parentDiv);

        // Clear the input field
        inputEle.value = '';
    }
}

function addTaskToDoneList(taskText) {
    
    const parentDiv1=document.createElement('div');
    parentDiv1.style.display='flex';
    const doneList = document.createElement('li');
    doneList.textContent = taskText;

    doneList.style.fontStyle = 'italic';
    doneList.style.opacity = 0.6;
    doneList.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
    doneList.style.listStyleType = 'decimal';
    
    const deletebuttondiv=document.createElement('div');
    deletebuttondiv.classList.add('deletebuttonclass');
    const deleteButtonForDone = document.createElement('button');
    deleteButtonForDone.classList.add('newbutton3');
    deleteButtonForDone.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButtonForDone.style.transform = 'rotate(-45deg)';
    deleteButtonForDone.style.backgroundColor = 'inherit';
    deleteButtonForDone.addEventListener('click', function () {

        // Remove the item when delete button is clicked
        doneEle.removeChild(parentDiv1);
    });

    deletebuttondiv.appendChild(deleteButtonForDone);
    parentDiv1.appendChild(doneList);
    parentDiv1.appendChild(deletebuttondiv);
    doneEle.appendChild(parentDiv1);
}





