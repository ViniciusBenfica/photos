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
  Filter,
  Select,
  Input
} from "../styles/index.styled"
import Router from 'next/router'

interface photographers {
  ID: number,
  name: string,
  place: string,
  photos: number
}

const Home: NextPage = () => {

  const [photographers, setPhotographers] = useState<Array<photographers>>([
    {ID: 1, name: "Vinicius Benfica", place: "Espirito santo", photos: 3000}, 
    {ID: 3, name: "Vinicius Benfica", place: "Espirito santo", photos: 3000},
    {ID: 4, name: "Vinicius Benfica", place: "Espirito santo", photos: 3000},
    {ID: 5, name: "Vinicius Benfica", place: "Espirito santo", photos: 3000},
    {ID: 6, name: "Vinicius Benfica", place: "Espirito santo", photos: 3000},
  ])

  /*   const dispatch = useDispatch()
    const {userName} = useSelector(selectUser)
  
    console.log(userName)
  
    const login = () => {
      
    } */

  return (
    <div>
      <Header></Header>
      <div className={box({ css: { textAlign: "center" } })}>
        <Filter>
          <div>
            <h3>ORDENAR POR:</h3>
            <Select>
              <option>Nome A a Z</option>
              <option>Nome Z a A</option>
              <option>Estado Z a A</option>
              <option>Estado Z a A</option>
              <option>Quantidade de fotos crescente</option>
              <option>Quantidade de fotos decrescente</option>
            </Select>
          </div>
          <div>
            <h3>PESQUISAR:</h3>
            <Input placeholder='Pesquise aqui'></Input>
          </div>
        </Filter>
      </div>
      <Body>
        {photographers.map((item: photographers) => (
          <DivImagens onClick={() => Router.push('/' + item.ID)}>
            <Image width={290} height={200} src={fotografo}></Image>
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
