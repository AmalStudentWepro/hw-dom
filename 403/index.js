let counter = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset');
const randomBtn = document.getElementById('random-btn');

incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});

decrementBtn.addEventListener('click', () => {
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
