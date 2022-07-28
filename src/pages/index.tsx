import type { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from "../redux/slice/userSlice"
import Image from 'next/image'
import { useState } from 'react'
import Header from "../components/header/header"

import fotografo from "../public/fotografo.jpg"
import user from "../public/user_branco.png"
import camera from "../public/camera_branca.png"
import pin from "../public/pin_branco.png"

import {
  box,
  DivImagens,
  Body,
  Filter
} from "../styles/index.styled"

interface photographers {
  name: string,
  place: string,
  photos: number
}

const Home: NextPage = () => {

  const [photographers, setPhotographers] = useState<Array<photographers>>([
    {name: "Vinicius Benfica", place: "Espirito santo", photos: 3000}, 
    {name: "Vinicius Benfica", place: "Espirito santo", photos: 3000},
    {name: "Vinicius Benfica", place: "Espirito santo", photos: 3000},
    {name: "Vinicius Benfica", place: "Espirito santo", photos: 3000},
    {name: "Vinicius Benfica", place: "Espirito santo", photos: 3000},
  ])

  /*   const dispatch = useDispatch()
    const {userName} = useSelector(selectUser)
  
    console.log(userName)
  
    const login = () => {
      
    } */

  return (
    <div>
      <Header></Header>
      <h1 className={box({ css: { textAlign: "center" } })}>NOSSOS FOTOGRAFOS</h1>
      <div className={box({ css: { textAlign: "center" } })}>
        <Filter>
          <div>
            <h4>POR ESTADO</h4>
            <select>
              <option>TESTE1</option>
            </select>
          </div>
          <div>
            <h4>POR FOTOGRAFO</h4>
            <select>
              <option>TESTE2</option>
            </select>
          </div>
          <div>
            <h4>POR EVENTO</h4>
            <select>
              <option>TESTE3</option>
            </select>
          </div>
        </Filter>
      </div>
      <Body>
        {photographers.map((item: photographers) => (
          <DivImagens>
            <Image width={270} height={180} src={fotografo}></Image>
            <div className={box({ css: { margin: "5px" } })}>
              <Image src={user} width={10} height={10}></Image>
              <span className={box({ css: { marginLeft: "10px" } })}>{item.name}</span>
            </div>
            <div className={box({ css: { margin: "5px" } })}>
              <Image src={camera} width={10} height={10}></Image>
              <span className={box({ css: { marginLeft: "10px" } })}>{item.place}</span>
            </div>
            <div className={box({ css: { margin: "5px" } })}>
              <Image src={pin} width={10} height={10}></Image>
              <span className={box({ css: { marginLeft: "10px" } })}>{item.photos} fotos</span>
            </div>
          </DivImagens>
        ))}
      </Body>
    </div>
  )
}

export default Home
