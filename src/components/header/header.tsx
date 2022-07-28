import { NextPage } from "next";
import Image from 'next/image'
import Router from "next/router";
import Logo from "../../public/pin.png"
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/slice/userSlice";
import { logout } from "../../redux/slice/userSlice"; 

import {
    Body,
    Button,
    Options
} from "./header.styled"
import Router from "next/router";

const Header: NextPage = () => {
    const { isLogged, userName } = useSelector(selectUser)
    const dispatch = useDispatch()

    const goout = () => {
        dispatch(logout())
    }

    return(
        <Body>
            <Options>
                <div><Image width={70} height={70} src={Logo}></Image></div>
                <Button>FOTOS</Button>
                <Button onClick={() => Router.push('/')}>FOTOGRAFOS</Button>
                <div>Baixar fotos</div>
                {isLogged ?
                    <div>
                        <div>Olá {userName}</div>
                        <div onClick={() => goout()}>Sair</div>
                    </div>
                    :
                    <div>
                        <div onClick={() => Router.push("/login")}>Fazer Login</div>
                        <div>Cadastre-se</div>
                    </div>
                }
                
                <div>Carrinho</div>
            </Options>
        </Body>
    )
}

export default Header