import { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "../components/header/header";
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from "../redux/slice/userSlice"

interface user{
    login: string,
    password: string,
}

const Login: NextPage = () => {
    const [user, setUser] = useState<user>({login: "", password: ""})
    const dispatch = useDispatch()
    
    const logar = () => {
        dispatch(login(user.login))
    }

    return(
        <div>
            <Header></Header>
            <div>Informe seu e-mail e senha</div>
            <input onChange={(e) => setUser((prevState) => ({...prevState, login: e.target.value}))} placeholder="E-mail"></input>
            <input onChange={(e) => setUser((prevState) => ({...prevState, password: e.target.value}))} placeholder="******"></input>
            <button>Esqueci a senha</button>
            <button onClick={() => logar()}>Acessar Conta</button>
        </div>
    )
}

export default Login