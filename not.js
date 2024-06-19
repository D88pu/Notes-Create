/*const notesContainer = document.querySelector(".notes-container");

const creatBtn = document.querySelector(".btn")
let notes = document.querySelectorAll(".input-box")

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

creatBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");// img
    inputBox.className = "input-box"; // class ka use inp class name
    inputBox.setAttribute("contenteditable","true");
    img.src ="https://cdn4.iconfinder.com/data/icons/very-simple-work/32/delet-256.png"; //img in photo
    notesContainer.appendChild(inputBox).appendChild(img);
})

// function ka use img ke leye kiya gya hai

notesContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "img"){
        e.target.parentElement.remove();
        updateStorage()
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

// Keydown word (enter) ko down karne ke liye kiya jatha hai
document.addEventListener("Keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLinerBreak");
        event.preventDefault();
    }
})*/

const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img"); // img
    inputBox.className = "input-box"; // class ka use inp class name
    inputBox.setAttribute("contenteditable", "true");
    img.src = "https://cdn4.iconfinder.com/data/icons/very-simple-work/32/delet-256.png"; //img in photo
    notesContainer.appendChild(inputBox).appendChild(img);
});

// function ka use img ke leye kiya gya hai

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            };
        });
    }
});

// Keydown word (enter) ko down karne ke liye kiya jatha hai
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
