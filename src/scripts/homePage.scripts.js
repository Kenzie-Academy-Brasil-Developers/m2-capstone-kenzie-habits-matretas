import Pages from "../controller/Pages.controller.js"
import ComponentesDom from "../models/ComponentesDom.models.js"

const btnNavMenu = document.getElementById("img__user")

function chamarMenu (){
    const nav = document.getElementById("navMenu__menu")
    nav.classList.toggle("active")
}

btnNavMenu.addEventListener("click", chamarMenu)

Pages.renderAllHabits()

const editBtns = document.getElementsByClassName("tableAffairs__edit--button")

for(let i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener('click', (e) => {
        ComponentesDom.modalEdit()
    })
}

const modalClose = document.querySelector('.modal__button--close').addEventListener('click', (e) => {
    const modal = document.querySelector('.modal')
    document.body.removeChild(modal)
})