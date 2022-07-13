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

Pages.renderAllHabits()
