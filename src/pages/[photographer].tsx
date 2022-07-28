import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/header/header";
import fotografo from "../public/fotografo.jpg"

import {
  DivImagens,
  Body,
  box,
  Title
} from "../styles/photographer.styled"

interface photographer {
    ID: number,
    eventName: string,
    place: string,
    photos: number
  }

const Photographer: NextPage = () => {

    const [events, setEvents] = useState<Array<photographer>>([
        {ID: 1, eventName: "Corrida 1", place: "Espirito santo", photos: 3000}, 
        {ID: 3, eventName: "Corrida 2", place: "Acre", photos: 3000},
        {ID: 4, eventName: "Corrida 3", place: "Rio de Janeiro", photos: 3000},
        {ID: 5, eventName: "Corrida 4", place: "São Paulo", photos: 3000},
        {ID: 6, eventName: "Corrida 5", place: "Espirito santo", photos: 3000},
      ])

    return(
        <div>
            <Header></Header>
              <h1 className={box({ css: { textAlign: "center" }})}>Vinicius Benfica Ruy</h1>
              <div className={box({ css: { textAlign: "center" }})}>
                <Image width={350} height={350} src={fotografo}></Image>
              </div>
              <h1 className={box({ css: { textAlign: "center" }})}>EVENTOS</h1>
            <Body>
                {events.map((item) => (
                    <DivImagens>
                    <Image width={290} height={200} src={fotografo}></Image>
                    <div className={box({ css: { margin: "5px" } })}>
                      <Image src={fotografo} width={10} height={10}></Image>
                      <span className={box({ css: { marginLeft: "10px" } })}>{item.eventName}</span>
                    </div>
                    <div className={box({ css: { margin: "5px" } })}>
                      <Image src={fotografo} width={10} height={10}></Image>
                      <span className={box({ css: { marginLeft: "10px" } })}>{item.place}</span>
                    </div>
                    <div className={box({ css: { margin: "5px" } })}>
                      <Image src={fotografo} width={10} height={10}></Image>
                      <span className={box({ css: { marginLeft: "10px" } })}>{item.photos} fotos</span>
                    </div>
                  </DivImagens>
                ))}
            </Body>
        </div>
    )
}

export default Photographer