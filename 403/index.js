let counter = 0;

const counterValue = document.getElementById('counter-value');
const plus = document.getElementById('plus-btn');
const minus = document.getElementById('minus-btn');
const resetBtn = document.getElementById('reset');
const randomBtn = document.getElementById('random-btn');

plus.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});

minus.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});

resetBtn.addEventListener('click', reset);

randomBtn.addEventListener('click', () => {
    counter = Math.floor(Math.random() * 101);
    counterValue.innerHTML = counter;
});

function reset() {
    counter = 0;
    counterValue.innerHTML = counter;
}
