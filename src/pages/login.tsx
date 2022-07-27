import { NextPage } from "next";
import Image from 'next/image'
import { useEffect, useState } from "react";
import Logo from "../../public/pin.png"
import Header from "../components/header/header";

interface user{
    login: string,
    password: string,
}

const Login: NextPage = () => {
    const [user, setUser] = useState<user>({login: "", password: ""})

    useEffect(() => {
        console.log(user)
    },[user])

    return(
        <div>
            <Header></Header>
            <div>Informe seu e-mail e senha</div>
            <input onChange={(e) => setUser((prevState) => ({...prevState, login: e.target.value}))} placeholder="E-mail"></input>
            <input onChange={(e) => setUser((prevState) => ({...prevState, password: e.target.value}))} placeholder="******"></input>
            <button>Esqueci a senha</button>
            <button>Acessar Conta</button>
        </div>
    )
}

export default Login