const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
let todo = addForm.add.value;

const generateTemplate = () => {

    const html = `     
<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`;

    list.innerHTML += html;

};

addForm.addEventListener('submit', e => {

    e.preventDefault();
    todo = addForm.add.value.trim();

    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();
    } else {
        alert("Unesite što želite napraviti");
    }
});

// delete button

list.addEventListener('click', e => {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }

});