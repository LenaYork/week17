const start = document.querySelector("#start");
const array = document.querySelector("#array");
const max = document.querySelector("#max");
const min = document.querySelector("#min");
const mid = document.querySelector("#mid");
const sum = document.querySelector("#sum");
const multy = document.querySelector("#multy");


start.addEventListener("click", function() {
    //генерируем 10 случайных чисел от -10 до 10 в массив arr
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.round((Math.random()-0.5)*20));
    }

    array.innerHTML = arr;
    max.innerHTML = Math.max(...arr);
    min.innerHTML = Math.min(...arr);
    sum.innerHTML = arr.reduce( (a, b) => a + b, 0);
    mid.innerHTML = sum.innerHTML / 10;
    multy.innerHTML = arr.reduce((a, b) => a * b, 1);
    // console.log(arr);
});