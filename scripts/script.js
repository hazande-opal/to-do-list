const toDo = document.querySelector('.js-to-do');
const toDoDate = document.querySelector('.js-todo-date');
const addToDoButton = document.querySelector('.js-add-todo-button');
const listAuthor = document.querySelector('.js-todo-list-author-input')


// const authors = JSON.parse(localStorage.getItem('author')) || ['Stranger'];

// listAuthor.addEventListener('keydown', (event) => {
//     if(event.key === 'Enter'){
//         const newListAuthor = listAuthor.value;
//         const authorNameSplit = newListAuthor.split(" ");
//         const firstName = authorNameSplit[0];

//         authors.push(firstName);
//         console.log(authors);

//         let authorHTML = '';
//         authors.forEach((author) => {
//             authorHTML += `${authors[0]}'s To Do List`;
//         })

//         // updateTheLocalStorage('author', authors);


//         document.querySelector('.js-todo-author').innerHTML = authorHTML;
        
//         listAuthor.value = '';
//     }

// })



const toDoLists = JSON.parse(localStorage.getItem('lists')) || [{
    todo : "My first todo List",
    date : "01/01/0001"
}];

function renderToDoList(){
    let html = '';

    for(let i = 0; i < toDoLists.length; i++){
        const toDoList = toDoLists[i];
        html += `<li class="h-10">
            <div class=" h-full flex text-sm font-mono justify-between border">
                <div class="p-2">${toDoList.todo}</div>
                <div class="p-2">${toDoList.date}</div>
                <button 
                class= "p-2 text-smd hover:text-red-700 js-delete-todo-button" 
                onclick="
                toDoLists.splice(${i}, 1)
                renderToDoList()
                updateTheLocalStorage('lists', toDoLists)
                " 
                data-button-id="${i}">
                <ion-icon name="trash-outline"></ion-icon>
                </button>
            </div>
        </li>
        `;
    }
    document.querySelector('.js-todo-list').innerHTML = html;   
}
renderToDoList();

//Adding to LocalStorage
addToDoButton.addEventListener('click', () => {
    const newToDo = toDo.value;
    const newtoDoDate = toDoDate.value;

    toDoLists.push({
        todo : newToDo,
        date : newtoDoDate
    })

    updateTheLocalStorage('lists', toDoLists)

    toDo.value = '';
    toDoDate.value = '';

    renderToDoList();
    
})

// Updating the local storage
function updateTheLocalStorage(storeComaprtment, itemToStore){
    localStorage.setItem(storeComaprtment, JSON.stringify(itemToStore))
}













