const add_form = document.querySelector(".adder");
const search_form = document.querySelector(".search");
const list = document.querySelector(".todos");

//Generate template to insert new todo
const generate = todo => {
    const HTML = `
    <li class="todo">
        <span class="p1">${todo}</span>
        <i class="fa-regular fa-trash-can trash"></i>
    </li>
    `;
    list.innerHTML += HTML;
};


//Adding new todo
add_form.addEventListener("submit", e => {
    e.preventDefault();
    const todo = add_form.adder__bar.value.trim();
    //Preventing empty todos from being added
    if(todo.length > 0)
    {
        generate(todo);
        add_form.reset();
    }
});


//Deleting todos
list.addEventListener("click", e => {
    if(e.target.tagName == "I")/* if(e.target.classList.contains("trash")) */
    {
        e.target.parentElement.remove();
    }
});


//Filtering the ul children elements, i.e , the li elements
const filterToDos = value =>{
    //Creating array from the li elements and filtering it and adding filtered class to each of the filtered 
    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(value))
    .forEach(todo => todo.classList.add("filtered"));

    //Removing filtered class from tags that match the search value
    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(value))
    .forEach(todo => todo.classList.remove("filtered"));

};

//Searching
search_form.addEventListener("keyup", e => {
    const val = search_form.search__bar.value.trim().toLowerCase();
    filterToDos(val);
});