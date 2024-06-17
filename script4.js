const colors= ["green", "blue", "yellow", "red", "orange", "white", "lightblue", "lightcoral", "lightgreen"]

const body = document.getElementsByTagName('body')[0];

const div = document.createElement('div');

div.classList.add('container');

body.appendChild(div);

const container = document.querySelector(".container");
console.log(container);

colors.forEach(color => {
    const box = document.createElement('button');
    box.innerHTML = color
    box.classList.add('box');
    box.style.backgroundColor = color;
    body.appendChild(box);
    box.addEventListener('click', () => {
        console.log(color);
        container.style.backgroundColor = color;
    })
});