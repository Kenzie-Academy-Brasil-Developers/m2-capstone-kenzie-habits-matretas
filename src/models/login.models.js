import RequisicaoLogin from "../controller/requisicao.login.controller.js"

class Login {
    static async logar (email, password) {

        const dados = {
            email,
            password
        }
        await RequisicaoLogin.loginUsuario(dados)
        
    }
}

export default Login;