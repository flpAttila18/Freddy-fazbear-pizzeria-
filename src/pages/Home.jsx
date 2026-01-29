import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import React from 'react'
import '../cssfolder/index.css'

import logo from '../assets/logo.png'
import Image from '../components/image'
import Btn from '../components/Btn'
import animatronics from '../assets/animatronics.png'
import Card from '../components/card'
import freddy from '../assets/freddy.png'
import Footer from '../components/Footer'
import H3txt from '../components/H3txt'
import BigCard from '../components/BigCard'
import arcade from '../assets/arkad.png'
import bonnie from '../assets/bonnie.png'
import chika from '../assets/chika.png'
import foxy from '../assets/foxy.png'
import Navbar from '../components/Navbar'
import pizza from '../assets/pizza.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Home() {

  const [animatronBtn, setAnimatronBtn] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(animatronBtn)
  })

  return (



    <>


      <Navbar />


      <div>
      </div>
      <Image
        DivCls={"animatronics"}
        source={animatronics}
        Imgcls={"animatronicspng"}
        Alter={"kép az animatronikokrol"}
      />

      <H3txt
        h3txt={"Meet the Fazbear Band – Freddy, Bonnie, Chica, and Foxy!They’re the friendliest animatronics, always ready for music, dancing, and fun.Come laugh, dance, and experience the magical moments at Fazbear Pizza! 🍕"}
      />



      <div className='d-flex flex-wrap justify-content-center gap-5 mt-4'>
        <Card
          imgSrc={bonnie}
          cardH5Txt={"Bonnie"}
          cardPTxt={"the best solo guitarist "}
            Onclick={() => {
            setAnimatronBtn(1)
            navigate('/Animatronics', { state: { animatron: 1 } })
          }}
          cardBtntXT={"who is Bonnie ?"}
        />

        <Card
          imgSrc={freddy}
          cardH5Txt={"Freddy Fazbear"}
          cardPTxt={"the best lead singer of all time "}
            Onclick={() => {
            setAnimatronBtn(2)
            navigate('/Animatronics', { state: { animatron: 2 } })
          }}
          cardBtntXT={"who is Freddy ?"}
        />

        <Card
          imgSrc={chika}
          cardH5Txt={"Chica"}
          cardPTxt={"the best daning chiken "}
            Onclick={() => {
            setAnimatronBtn(3)
            navigate('/Animatronics', { state: { animatron: 3 } })
          }}
          cardBtntXT={"who is Chica ?"}
        />

        <Card
          imgSrc={foxy}
          cardH5Txt={"Foxy"}
          cardPTxt={"the scariest pirate on the seven seas"}
          Onclick={() => {
            setAnimatronBtn(4)
            navigate('/Animatronics', { state: { animatron: 4 } })
          }}
          cardBtntXT={"who is Foxy ?"}
        />
      </div>

      <H3txt
        h3txt="OTHER OPTIONS"
        center={true}
      />

      <div className='d-flex flex-wrap justify-content-center gap-5 mt-4 bcard'>
        <BigCard
          Onclick={""}
          BCsrc={arcade}
          BCh5={"ARCADE MACHINES"}
          BCp1={"You can play the best arcade games "}
        />

        <BigCard
          Onclick={() => navigate('/Pizzas')}
          BCsrc={pizza}
          BCh5={"Pizzas"}
          BCp1={"Try the best pizzas in the world!"}
        />
      </div>

      <Footer />


    </>


  )




}

