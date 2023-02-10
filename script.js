const body = document.querySelector('body');

const input = document.createElement('input');

input.type = 'text';

body.appendChild(input);

const createDiv = document.createElement('div');

const createUl = document.createElement('ul');

body.appendChild(createDiv);

const catchDiv = document.querySelector('div');

catchDiv.appendChild(createUl)

let cont = 0;


function createTask() {
    const catchUl = document.querySelector('ul');
    const task = document.createElement('li');
    const valueLi = input.value;
    task.id = cont;

    const button = document.createElement('button');
    button.id = cont;
    button.classList.add('remove');
    button.type = 'button'
    button.innerHTML = 'X';

    const buttonEdit = document.createElement('button');
    buttonEdit.id = cont;
    buttonEdit.classList.add('button');
    buttonEdit.type = 'button'

    const createSpan = document.createElement('span');
    createSpan.classList.add('button-icon');

    const createIon = document.createElement('ion-icon');
    createIon.name = 'create-outline'

    task.innerText = valueLi;
    catchUl.appendChild(task);
    task.appendChild(button);
    task.appendChild(buttonEdit);

    buttonEdit.appendChild(createSpan);
    createSpan.appendChild(createIon);
    cont += 1
}


function storeTask() {
    const array = [];
    const catchLi = document.querySelectorAll('li');
    for (let i = 0; i < catchLi.length; i += 1) {
        let textLi = catchLi[i].innerText;
        let newtexto = textLi.replaceAll('X', '');
        array.push(newtexto);
        localStorage.setItem('li', JSON.stringify(array));
    }
}

function remove() {
    const allButton = document.querySelectorAll('.remove');
    const ulTask = document.querySelector('ul');
    const childrens = ulTask.childNodes;
    for (let i = 0; i < allButton.length; i += 1) {
        allButton[i].addEventListener('click', () => {
            const remove = allButton[i].id
            const catchRemove = document.getElementById(remove);
            ulTask.removeChild(catchRemove);
            storeTask();
        })
    }
}

function removeLast() {
    const allButton = document.querySelectorAll('.remove');
    const ulTask = document.querySelector('ul');
    const childrens = ulTask.childNodes;
    for (let i = 0; i < allButton.length; i += 1) {
        allButton[i].addEventListener('click', () => {
            const a = document.querySelectorAll('li').length
            if (a === 0) {
                localStorage.removeItem('li');
            }
        })

    }
}

function edit() {
    const allButton = document.getElementsByClassName('button');
    for (let i = 0; i < allButton.length; i += 1) {
        let cont = 1;
        allButton[i].addEventListener('click', () => {
            let createInput = document.createElement('input');
            createInput.classList.add(cont +1);
            console.log(cont)
            cont += 1
            const catchLi = document.getElementById(allButton[i].id);
            catchLi.appendChild(createInput)
            createInput = undefined;
        })
        // cont += 1;
    }
}

function rescueLi() {
    if (localStorage.getItem('li') !== null) {
        const rescueLi = JSON.parse(localStorage.getItem('li'));
        for (let i = 0; i < rescueLi.length; i += 1) {
            const catchUl = document.querySelector('ul');
            const task = document.createElement('li');
            task.innerText = rescueLi[i];
            task.id = cont;

            catchUl.appendChild(task);

            const button = document.createElement('button');
            button.id = cont;
            button.classList.add('remove');

            button.type = 'button'
            button.innerHTML = 'X';
            task.appendChild(button);

            remove();

            const buttonEdit = document.createElement('button');
            buttonEdit.id = cont;
            buttonEdit.classList.add('button');
            buttonEdit.type = 'button'

            const createSpan = document.createElement('span');
            createSpan.classList.add('button-icon');

            const createIon = document.createElement('ion-icon');
            createIon.name = 'create-outline'

            task.appendChild(buttonEdit);

            buttonEdit.appendChild(createSpan);
            createSpan.appendChild(createIon);
            edit()
            cont += 1
        }
    }
}


function validatesEnter() {
    const catchInput = document.querySelector('input');
    catchInput.addEventListener('keydown', function (e) {
        if (e.code === 'Enter') {
            createTask();
            remove();
            storeTask();
            removeLast();
            edit();
        }

    })
}



function init() {
    validatesEnter();
    rescueLi();
    removeLast();
}

window.onload = init;   
