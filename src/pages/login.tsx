import { NextPage } from "next";
import Image from 'next/image'
import Logo from "../../public/pin.png"
import Header from "../components/header/header";

const Login: NextPage = () => {
    return(
        <div>
            <Header></Header>
            <div>Informe seu e-mail e senha</div>
            <input placeholder="E-mail"></input>
            <input placeholder="******"></input>
            <button>Esqueci a senha</button>
            <button>Acessar Conta</button>
        </div>
    )
}

export default Login