const input = document.querySelector("#result");
/*const button = document.querySelector("#btn-1");

button.addEventListener("click", ()=> {
    input.innerHTML = input.innerHTML + 1;
});

document.getElementById("btn-2").addEventListener("click", ()=> {
    input.innerHTML = input.innerHTML + 2;
});


document.getElementById("btn-3").addEventListener("click", ()=> {
    input.innerHTML = input.innerHTML + 3;
});

document.getElementById("btn-4").addEventListener("click", ()=> {
    input.innerHTML = input.innerHTML + 4;
});

document.getElementById("btn-5").addEventListener("click", ()=> {
    input.innerHTML = input.innerHTML + 5;
});

document.getElementById("btn-6").addEventListener("click", ()=> {
    input.innerHTML = input.innerHTML + 6;
});

document.getElementById("btn-7").addEventListener("click", ()=> {
    input.innerHTML = input.innerHTML + 7;
});

document.getElementById("btn-8").addEventListener("click", ()=> {
    input.innerHTML += 8;
});

document.getElementById("btn-9").addEventListener("click", ()=> {
    input.innerHTML += 9;
});

document.getElementById("btn-0").addEventListener("click", ()=> {
    input.innerHTML += 0;
});

document.getElementById("btn+").addEventListener("click", ()=> {
    input.innerHTML += "+";
});

document.getElementById("btn-").addEventListener("click", ()=> {
    input.innerHTML += "-";
});

document.getElementById("btn/").addEventListener("click", ()=> {
    input.innerHTML += "/";
});

document.getElementById("btn*").addEventListener("click", ()=> {
    input.innerHTML += "*";
});

document.getElementById("btne").addEventListener("click", ()=> {
    input.innerHTML = " ";
});

document.getElementById("btn=").addEventListener("click", ()=> {
    input.innerHTML = eval(input.innerHTML);
});
*/

const result = (value) => {
    input.innerHTML = input.innerHTML + value;
}

const addToScreen = () => {
    input.innerHTML = " "
}

const sum = () => {
    input.innerHTML = eval(input.innerHTML);
}