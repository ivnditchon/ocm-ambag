const userNameForm = documentSelector('#user_name_form');
const userTaskForm = documentSelector('#user_task_form');
const userInputName = documentSelector('#user_input_name');
const userName = documentSelector('#user_name');



/** focus input field */
const inputField = (inputField, button, icon) => {

    // Focus in input field and it will change the background color of the icon and input field
    inputField.addEventListener('focusin', () => {
        if (button.classList.contains('border-crimson', 'bg-gray-100') && icon.classList.contains('text-crimson')) {
            button.classList.remove('border-crimson', 'bg-gray-100');
            icon.classList.remove('text-crimson');
            button.classList.add('bg-crimson', 'text-gray-200');
            icon.classList.add('text-gray-200');
        }
    });

    inputField.addEventListener('focusout', () => {
        if(button.classList.contains('bg-crimson', 'text-gray-200') && icon.classList.contains('text-gray-200')) {
            button.classList.remove('bg-crimson', 'text-gray-200');
            icon.classList.remove('text-gray-200');
            button.classList.add('border-crimson','bg-gray-200');
            icon.classList.add('text-crimson');
        }
    }); 
}

const saveInput = (input) => {
    let todos;

    if (localStorage.getItem('todos') === null) {
        todos = {}; // create an array
        todos.user_name = input.value.trim().toLowerCase();
    } else {
        todos.JSON.parse(localStorage.getItem(todos))
        if(todos.hasOwnProperty('task')) {
            todos.task.push(input.value.trin().toLowerCase());
        } else {
            todos.task = [];
            todos.task.push(input.value.trim().toLowerCase());
        }
    }
}

const setTask = (form, input) => {
    const task = input;
}