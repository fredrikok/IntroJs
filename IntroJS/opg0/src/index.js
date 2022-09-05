// Oppgave 1

let removeText = document.getElementById("remove");
let removeBtn = document.getElementById("remove-btn");

removeBtn.addEventListener("click", () => {
  removeText.innerHTML = "";
});

// Oppgave 2

let textChange = document.getElementById("change");
let changeBtn = document.getElementById("change-btn");

changeBtn.addEventListener("click", () => {
  textChange.innerHTML = "I WATCH A CHAAAANGE IN YOUUUUU";
});

// Oppgave 3

let inputBox = document.getElementById("input");
let inputText = document.getElementById("input-text");

inputBox.addEventListener("click", () => {
  inputText.innerHTML = "";
});

let nyText = (event) => {
  let pressedLetter = event.key;
  inputText.innerHTML += pressedLetter;
};

inputBox.addEventListener("keyup", nyText);

// Oppgave 4
const myList = ["Uhm", "hei", "på deg"];

const writeListButton = document.getElementById("write-list");
const ul = document.getElementById("ul");

writeListButton.addEventListener("click", () => {
  ul.innerHTML =
    "<li>" +
    myList[0] +
    "</li>" +
    "<li>" +
    myList[1] +
    "</li>" +
    "<li>" +
    myList[2] +
    "</li>";
});
// Oppgave 5

let select = document.getElementById("select");
let text = document.getElementById("text");
let createTextBtn = document.getElementById("create");
let placeholder = document.getElementById("placeholder");

createTextBtn.addEventListener("click", () => {
  let selectHTML = select.value;
  let inputText = text.value;
  placeholder.innerHTML =
    "<" + selectHTML + ">" + inputText + "</" + selectHTML + ">";
});

// Oppgave 6
let list = document.getElementById("list");
let removeElementBtn = document.getElementById("remove-li");

removeElementBtn.addEventListener("click", () => {
  list.removeChild(list.firstElementChild);
});

// Oppgave 7

let nameInput = document.getElementById("name");
let orderBtn = document.getElementById("order");

nameInput.addEventListener("keypress", () => {
  let name = nameInput.value;

  for (let i = 0; i < name.length; i++) {
    if (name.length < 4) {
      orderBtn.disabled = false;
    } else {
      orderBtn.style.backgroundColor = "red";
    }
  }
});

nameInput.addEventListener("keyup", nameInput);

// Oppgave 8
const addBorderBtn = document.getElementById("color");
let oddChildren = document.querySelectorAll(".children li:nth-child(odd)");
let evenChildren = document.querySelectorAll(".children li:nth-child(even)");

addBorderBtn.addEventListener("click", () => {
  for (let i = 0; i < oddChildren.length && i < evenChildren.length; i++) {
    oddChildren[i].style.border = "solid green";
    evenChildren[i].style.border = "solid pink";
  }
});
