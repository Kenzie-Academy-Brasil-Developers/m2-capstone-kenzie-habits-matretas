import Api from "../controller/Api.controller.js";

class Login {
    static async logar (email, password) {

        const dados = {
            email,
            password
        }
        await Api.loginUsuario(dados)
        
    }
}

export default Login;