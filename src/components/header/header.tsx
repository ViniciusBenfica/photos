import { NextPage } from "next";
import Image from 'next/image'
import Logo from "../../public/pin.png"

import { Body, Button } from "./header.styled"

const Header: NextPage = () => {
    return(
        <Body>
            <div><Image width={70} height={70} src={Logo}></Image></div>
            <Button>FOTOS</Button>
            <Button>FOTOGRAFOS</Button>
            <div>Baixar fotos</div>
            <div>Fazer Login</div>
            <div>Cadastre-se</div>
            <div>Carrinho</div>
        </Body>
    )
}

export default Header