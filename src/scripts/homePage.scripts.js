import Pages from "../controller/Pages.controller.js"

const btnNavMenu = document.getElementById("img__user")

function chamarMenu (){
    const nav = document.getElementById("navMenu__menu")
    nav.classList.toggle("active")
}

btnNavMenu.addEventListener("click", chamarMenu)

Pages.renderAllHabits()