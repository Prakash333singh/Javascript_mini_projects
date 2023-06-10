inputs = document.getElementById("inp");
text = document.querySelector(".text");

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Task")
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${
            inputs.value
        } <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click", remove);
        function remove() {
            newEle.remove()
        }
    }
}
var inp = document.getElementById("inp");
inp.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        validate(e);
    }
});

function validate(e) {
    Add()
}
