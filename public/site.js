let myKnopka = document.getElementById('add-btn');
myKnopka.addEventListener('click', addItem);

document.addEventListener('keydown', function (ev) {
    if (ev.code === 'Enter') addItem();
});

function addItem(data) {
    let input = document.getElementById('shooter');
    let list = document.getElementById('todo-list');

    if (input.value !== '' && input.value !== null) {
        let newItem = document.createElement('li');
        newItem.classList.add('list-group-item');

        let newBlock = 
        `<div class="form-check">
            <input class="form-check-input" type="checkbox">
            <label class="form-check-label">
                ${input.value}
            </label>
        </div>`;

        newItem.innerHTML = newBlock;
        list.appendChild(newItem);
    }

    input.value = '';
}