const container = document.getElementById('container');
const inputEl = document.getElementById('input-value');
document.getElementById('generate-grid-btn').addEventListener('click',updateGrid);

function updateGrid(){
    inputEl.addEventListener("change", createGrid);
    inputEl.addEventListener('input',createGrid);
}

function createGrid() {
    const input = inputEl.value;
    if (input >=1 && input <= 64) {
        container.innerHTML = "";
        generateGrid(input);
    } else {
        alert('Invalid input! Please select a number between 1 and 64.');
    }
}

function generateGrid (input) {
    const size = input * input;
    for ( let i = 0; i < size; i++) {
            let div = document.createElement('div');
            div.classList.add('square');
            div.style.height = (1000 / input) + 'px';
            div.style.width = ( 1000 / input) + 'px';
            div.addEventListener('mouseenter', function() {
                div.classList.add('black-square');
            });
            div.addEventListener('mouseleave', function() {
                div.classList.remove('black-square');
            });
            container.appendChild(div);
        }}