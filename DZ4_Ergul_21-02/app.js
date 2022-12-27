// const count = document.querySelector('.count');
// const decrease = document.querySelector('.decrease');
// const reset = document.querySelector('.reset');
// const increase = document.querySelector('.increase');
//
// let state = 0;
//
// increase.onclick = function increment() {
//     state++;
//     count.innerHTML = state;
//     if (state > 0) {
//         state = state;
//         count.style.color = 'green'
//     } else if (state === 0) {
//         state = state;
//         count.style.color = 'gray'
//     }
// }
//
// decrease.onclick = function decrement() {
//     state--;
//     count.innerHTML = state;
//     if (state < 0) {
//         state = state;
//         count.style.color = 'red'
//     } else if (state === 0) {
//         state = state;
//         count.style.color = 'gray'
//     }
// }
//
// reset.onclick = function reset() {
//     state = 0;
//     count.innerHTML = state;
//     if (state === 0) {
//         state = state;
//         count.style.color = 'gray'
//     }
// }



const generate = document.querySelector('.generate');
const loto = document.getElementsByClassName('loto');

generate.onclick = () => {
    for (let i = 0; i <= 6; i++) {
        loto[i].innerHTML = Math.ceil(Math.random() * 100)
    }
}

