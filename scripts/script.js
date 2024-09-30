// JavaScript Document
console.log("hi");

let menuKnop = document.querySelector("header ul li:last-of-type svg:first-of-type");
let sluitKnop = document.querySelector("header ul li:last-of-type svg:last-of-type");
let nav = document.querySelector("nav");
let body = document.querySelector("body");

menuKnop.onclick = openMenu;
sluitKnop.onclick = sluitMenu;

function openMenu(){
    nav.classList.add("toon-menu");
    document.querySelector(".verdwijn").style.display = "block";
    document.querySelector(".weg").style.display = "none";
    body.classList.add("noScroll")
}

function sluitMenu(){
    nav.classList.remove("toon-menu");
    document.querySelector(".verdwijn").style.display = "none";
    document.querySelector(".weg").style.display = "block";
    body.classList.remove("noScroll")
}


let laatsteScroll = 0;
const header = document.querySelector("body > article")

window.addEventListener("scroll", () => {
    let huidigescroll = window.pageYOffset;
    

    if ( huidigescroll > laatsteScroll) {
       header.style.transform = "translateY(-100%)";
    } else {
        header.style.transform = "translateY(0)";
    }

    laatsteScroll = huidigescroll;
});
