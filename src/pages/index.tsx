import type { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'
import { changeUser, logout, selectUser } from "../redux/slice/userSlice"
import Image from 'next/image'
import { useState } from 'react'
import fotografo from "../public/fotografo.jpg"

import {
  box,
  DivImagens,
  Body
} from "../styles/index.styled"

interface fotografos {

}

const Home: NextPage = () => {

  const [fotografos, setFotografos] = useState<Array<fotografos>>(["vinicius", "paulo", "jp"])

  /*   const dispatch = useDispatch()
    const {userName} = useSelector(selectUser)
  
    console.log(userName)
  
    const login = () => {
      
    } */

  return (
    <div>
      <h1 className={box({ css: { textAlign: "center" } })}>NOSSOS FOTOGRAFOS</h1>
      <div>
        <div>POR ESTADO</div>
        <div>POR FOTOGRAFO</div>
        <div>POR EVENTO</div>
      </div>
      <Body>
        {fotografos.map((item: any) => (
          <DivImagens>
            <Image width={250} height={200} src={fotografo}></Image>
            <div>Vinicius Benfica ruy</div>
            <div>Espirito Santo</div>
            <div>3000 fotos</div>
          </DivImagens>
        ))}
      </Body>
    </div>
  )
}

export default Home
