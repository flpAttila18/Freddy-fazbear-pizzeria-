import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import '../cssfolder/index.css'

import logo from '../assets/logo.png'
import Image from '../components/image'
import Btn from '../components/Btn'
import animatronics from '../assets/animatronics.png'
import Card from '../components/card'
import freddy from '../assets/freddy.png'
import Footer from '../components/footer'
import H3txt from '../components/H3txt'
import BigCard from '../components/BigCard'
import arcade from '../assets/arcadesp.jpg'
import bonnie from '../assets/bonnie.png'
import chika from '../assets/chika.png'
import foxy from '../assets/foxy.png'


export default function Home() {


  return (
    <>
      <nav className="nvbar navbar p-3 nav-background">
  <div className="container-fluid d-flex flex-column flex-lg-row align-items-center justify-content-between">

    {/* LOGO */}
    <div className="d-flex justify-content-center justify-content-lg-start mb-2 mb-lg-0">
      <Image
        DivCls="nav"
        source={logo}
        Imgcls="size"
        Alter="fazber logo"
      />
    </div>

    {/* TITLE */}
    <div className="d-flex justify-content-center flex-grow-1 mb-2 mb-lg-0">
      <h1 className="titletxt mb-0 text-nowrap">Freddy Fazbear Pizzeria</h1>
    </div>

    {/* BUTTONS */}
    <div className="d-flex flex-column flex-lg-row gap-2 align-items-center mt-2 mt-lg-0">
      <Btn Btnclass="button fs-5 btnClass" btntext="Home" />
      <Btn Btnclass="button fs-5 btnClass" btntext="Order" />
      <Btn Btnclass="button fs-5 btnClass" btntext="Parties" />
      <Btn Btnclass="button fs-5 btnClass" btntext="Book a party" />
    </div>

  </div>
</nav>
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
          cardBtntXT={"who is Bonnie ?"}
        />

        <Card
          imgSrc={freddy}
          cardH5Txt={"Freddy Fazbear"}
          cardPTxt={"the best lead singer of all time "}
          cardBtntXT={"who is Freddy ?"}
        />

        <Card
          imgSrc={chika}
          cardH5Txt={"Chica"}
          cardPTxt={"the best daning chiken "}
          cardBtntXT={"who is Chica ?"}
        />

        <Card
          imgSrc={foxy}
          cardH5Txt={"Foxy"}
          cardPTxt={"the scariest pirate on the seven seas"}
          cardBtntXT={"who is Foxy ?"}
        />
      </div>

      <H3txt
        h3txt="OTHER OPTIONS"
        center={true}
      />

      <BigCard
        BCsrc={arcade}
        BCh5={"ARCADE MACHINES"}
        BCp1={"You can play the best arcade games "}
      />

      <Footer />


    </>
  )
}

