import Login from "../models/login.models.js"

class Loginpage {

    static usr_image   = localStorage.getItem("@kenzie-habits:usr_image")
    static url         = (window.location.href).split("/")
    static filteredUrl = this.url.slice(0, 3).join("/")

    static fazerLogin () {

        const btn = document.querySelector(".loginForm__button--submit")
        btn.addEventListener("click", async (event) => {
            event.preventDefault()
    
            const user = document.querySelector(".loginForm__input--user").value
            const password = document.querySelector(".loginForm__input--password").value
            await Login.logar(user, password)

            const usr_name    = localStorage.getItem("@kenzie-habits:usr_name")
            const token       = localStorage.getItem("@kenzie-habits:token")
        
            if (usr_name && token) {
                window.location.href = `${this.filteredUrl}/src/views/homePage.views.html`
            }

        })
    }
}

Loginpage.fazerLogin()