import Pages from "../controller/Pages.controller.js"
import ComponentesDom from "../models/ComponentesDom.models.js"

//CODIGO PARA ABRIR O MENU DE EDITAR E SAIR

const btnNavMenu = document.getElementById("img__user")

function chamarMenu (){
    const nav = document.getElementById("navMenu__menu")
    nav.classList.toggle("active")
}

btnNavMenu.addEventListener("click", chamarMenu)

//FIM DO CODIGO MENU


// BTN CREATE HABIT

const btnCreate = document.querySelector(".navigationButton--criar")

btnCreate.addEventListener('click', () => {
    ComponentesDom.modalCreateHabit()
})

//------------------------------------------------------------------


// PROFILE PHOTO AND NAME

const imgUser = document.querySelector("#img__user")
const imgUser2 = document.querySelector("#img__user2")
const getPhoto = localStorage.getItem("@kenzie-habits:usr_image")

imgUser.src = getPhoto
imgUser2.src = getPhoto

const nameProfile = document.querySelector("#name__profile")
const getName = localStorage.getItem("@kenzie-habits:usr_name")

nameProfile.innerText = getName

//------------------------------------------------------------------

await Pages.renderAllHabits()

const editBtns = document.getElementsByClassName("tableAffairs__edit--button")

for(let i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener('click', (e) => {
        let id = e.target.id
        console.log(id)
        ComponentesDom.modalEdit(id)
    })
}




class homePage { 

    static usr_name    = localStorage.getItem("@kenzie-habits:usr_name")
    static token       = localStorage.getItem("@kenzie-habits:token")
    static usr_image   = localStorage.getItem("@kenzie-habits:usr_image")
    static url         = (window.location.href).split("/")
    static filteredUrl = this.url.slice(0, 3).join("/")

    static async verificarLogin () {

        if (this.token === null || this.usr_name === null) {
            window.location.href = `${this.filteredUrl}/index.html`
        }

    }

    static logout() {

        const btn = document.querySelector(".navMenu__button--sair")
        btn.addEventListener("click", event => {
            localStorage.removeItem("@kenzie-habits:usr_name")
            localStorage.removeItem("@kenzie-habits:token")
            localStorage.removeItem("@kenzie-habits:usr_image")
        })

    }

    static async main () {
        await homePage.verificarLogin()
        homePage.logout()
    }
}

homePage.main()
ComponentesDom.modalEditProfile()