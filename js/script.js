"use strict";

let addTaskBtn = document.getElementById('button-add'),
    deleteTaskBtn = document.getElementById('btn-delete${index}'),
    descTaskInput = document.getElementById('input'),
    blockTask = document.getElementsByClassName('.block-task'),
    todosWrapper = document.getElementById('todos-wrapper');

let tasks;
!localStorage.getItem("tasks") ? tasks = [] : tasks = JSON.parse(localStorage.getItem("tasks"));

const updateLocal = () => {
    localStorage.setItem('tasks' , JSON.stringify(tasks));
}

const createTemplate = (todo , index) => {
    return `
        <div class="block-task">
            <div class="center-width">
                <div class="input-text">
                    <p class="description">${todo.title}</p>
                </div>
                <div class="btn-checkbox-group">
                    <input type="checkbox" class="checkbox-input" ${todo.checked ? 'checked' : null}>
                    <button class="delete-btn" id="btn-delete${index}">Удалить</button>
                </div>
            </div>
        </div>
    `
}

const fillHtmlList = () => {
    todosWrapper.innerHTML = "";
    if (tasks.length > 0 ) {
        tasks.forEach(function (task, index) {
            todosWrapper.innerHTML += createTemplate(task , index);
        })
    }
}
fillHtmlList(); //должна быть заранее,пусто у нас в тасках или нет
const todo = document.querySelector('.description');

addTaskBtn.addEventListener('click' , () => {
    let task = {
        title: descTaskInput.value,
        checked: false,
    };
    tasks.push(task);
    updateLocal();
    fillHtmlList();
    createTemplate();
});
console.log(blockTask);
console.log();


// deleteTaskBtn.addEventListener('click', function (event) {
//     console.log(event.target);
    // fillHtmlList();
// })

deleteTaskBtn.addEventListener('click', function(event){
    console.log(blockTask);
})






















// let tasks = [];
/*
// let tasks;
*/
/*let localCheck() {
    if (localStorage.getItem(tasks))
}*/
// !localStorage.getItem(tasks) ? tasks = [] : tasks = JSON.parse(localStorage.getItem(tasks));
//
//
// function Task(description) {
//     this.description = description;
//     this.completed = false;
// }

//ошибка где-то в этой функии
/*let createTemplate = (task, index) => {
    return `
        <div class="block-task">
            <div class="center-width">
                <div class="input-text">
                    <p class="description">${tasks.map(task => task.description)}</p>
                </div>
                <div class="btn-checkbox-group">
                    <input type="checkbox" class="checkbox-input">
                    <button class="delete-btn">Удалить</button>
                </div>
            </div>
        </div>
    `
}

let fillHtmlList = () => {
    todosWrapper.innerHTML = "";
    if (tasks.length > 0) {
        tasks.forEach((item, index) => {
            todosWrapper.innerHTML += createTemplate(item, index);
        })
    }
}

 const updateLocalStorage = () => {
    localStorage.setItem('tasks' , JSON.stringify(tasks));
}

// let everyDescriptionOfTaskMassive = tasks.map(task => task.description);
//     console.log(everyDescriptionOfTaskMassive);

addTaskBtn.addEventListener('click' , () => {
   tasks.push(new Task(descTaskInput.value));
   updateLocalStorage();
    console.log(tasks);
    let dds = function () {
        var everyDescriptionOfTaskMassive = tasks.map(task => task.description);
            return(everyDescriptionOfTaskMassive);
    }
    dds();
    // console.log(localStorage.tasks.task.valueOf(description));
    // let everyDescriptionOfTaskMassive = tasks.map(task => task.description);
    // console.log(everyDescriptionOfTaskMassive);
    fillHtmlList();
    createTemplate();
})*/


/*let createTemplate = (task, index) => {
    return `
        <div class="block-task">
            <div class="center-width">
                <div class="input-text">
                    <p class="description">${tasks.map(task => task.description)}</p>
                </div>
                <div class="btn-checkbox-group">
                    <input type="checkbox" class="checkbox-input">
                    <button class="delete-btn">Удалить</button>
                </div>
            </div>
        </div>
    `
}*/
