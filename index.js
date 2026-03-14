const colors = ["red", "blue", "green", "purple", "orange"];
const text = document.getElementById("welcome");

let index = 0;

function changeColor() {
    text.style.color = colors[index];
    index = (index + 1) % colors.length;
}

window.onload = function () {
    setInterval(changeColor, 1000);
};



// const myname = document.getElementById("name");

// let index1 = 0;

// function changeColor2() {
//     myname.style.color = colors[index];
//     index1 = (index + 1) % colors.length;
// }

// window.onload = function () {
//     setInterval(changeColor2, 1000);
// };