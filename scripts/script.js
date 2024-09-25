// JavaScript Document
console.log("hi");

let menuKnop = document.querySelector("header ul li:last-of-type svg:first-of-type");
let sluitKnop = document.querySelector("header ul li:last-of-type svg:last-of-type")

menuKnop.onclick = openMenu;
sluitKnop.onclick = sluitMenu;

function openMenu(){
    let nav = document.querySelector("nav");
    nav.classList.add("toon-menu");
    document.querySelector(".verdwijn").style.display = "block";
    document.querySelector(".weg").style.display = "none";
}

function sluitMenu(){
    let nav = document.querySelector("nav");
    nav.classList.remove("toon-menu");
    document.querySelector(".verdwijn").style.display = "none";
    document.querySelector(".weg").style.display = "block";
}