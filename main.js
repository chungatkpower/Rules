const body = document.body;
const height = window.innerHeight;
const width = window.innerWidth;

console.log(height)
console.log(width)

const longshort = `Chiều cao là: ${height} <br>
                   Chiều ngang là: ${width}`;

const bodylongshort = document.querySelector("body");
body.insertAdjacentHTML("afterbegin", longshort)
