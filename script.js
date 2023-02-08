const body = document.querySelector('body');

const input = document.createElement('input');



input.type = 'text';

body.appendChild(input);

function validatesEnter () {
    const catchInput = document.querySelector('input');
    catchInput.addEventListener('keydown', function (e) {
        if (e.code === 'Enter') {
            createTask();
        }

    })
}

function createTask () {
    const task = document.createElement('p');
    const valueP = input.value;
    task.innerHTML = valueP;
    body.appendChild(task)
}


function init () {
    validatesEnter();
}

window.onload = init;