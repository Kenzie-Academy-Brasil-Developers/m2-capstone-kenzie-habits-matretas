class Api {
    static base_url = "https://habits-kenzie.herokuapp.com"
    static token = JSON.parse(localStorage.getItem("@kenzie-habits:token"))

    static async loginUsuario(loginData) {
    
        return await fetch(`${this.base_url}/api/userLogin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        })
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            if (res.response.usr_name){
                localStorage.setItem("@kenzie-habits:usr_name", JSON.stringify(res.response.usr_name))
            }
            if (res.response.usr_image){
                localStorage.setItem("@kenzie-habits:usr_image", JSON.stringify(res.response.usr_image))
            }
            if (res.token){
                localStorage.setItem("@kenzie-habits:token", JSON.stringify(res.token))
            }
            return res
        })
        .catch(err => console.log(err))
    }

    static async readAllHabits() {

        return await fetch(`${this.base_url}/api/habits`, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }
}

export default Api