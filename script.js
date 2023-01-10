const container = document.getElementById('container');
const inputEl = document.getElementById('input-value');
const input = inputEl.value;

function generateGrid () {
    for (i = 1; i < input; i++) {
        if (input >=1 && input <= 64) {
            let div = container.createElement('div');
            div.classList.add('square');
            div.style.height = input + 'px';
            div.style.width = input + 'px';
            container.appendChild(div);
        } else {
            alert('Invalid input!');
        }
    } 
    }