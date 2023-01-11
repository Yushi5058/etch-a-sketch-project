const container = document.getElementById('container');
const inputEl = document.getElementById('input-value');
const input = inputEl.value;
const size = input * input;

document.getElementById('generate-grid-btn').addEventListener('click',createGrid);

function createGrid() {
    if (input >=1 && input <= 64) {
        container.innerHTML = '';
        generateGrid();
    } else {
        alert('Invalid input! Please select a number between 1 and 64.');
    }
}

function generateGrid () {
    for ( let i = 0; i < size; i++) {
            let div = document.createElement('div');
            div.classList.add('square');
            div.style.height = (1000 / input) + 'px';
            div.style.width = ( 1000 / input) + 'px';
            div.addEventListener('mouseenter', function() {
                div.style.backgroundColor = 'black';
            });
            div.addEventListener('mouseleave', function() {
                div.style.backgroundColor = 'white';
            })
            container.appendChild(div);
    } 
    }