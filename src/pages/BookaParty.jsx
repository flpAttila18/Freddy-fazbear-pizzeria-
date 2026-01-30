import React from "react";
import Navbar from "../components/Navbar";
import '../cssfolder/index.css'
import Image from "../components/image";
import BookaPartyy from '../assets/BookaPartyp.png'
import Card from "../components/card";
import ultimatepizza from '../assets/ultimatepizza.png'
import liveactionshow from '../assets/liveactionshow.png'
import arcadeparty from '../assets/arcadeparty.png'
import birthdayparty from '../assets/birthdayparty.png'
import Footer from "../components/Footer";

export default function BookaParty(){
    return(
        <>
        <Navbar/>
        <Image 
        DivCls={'animatronics'} 
        source={BookaPartyy}
        Imgcls={'animatronicspng'}
        Alter={'Book a party '}
        />

        <h1 className="text-center  m-5 bg-danger">BOOK A PARTY</h1>

        <div className="container flex-wrap d-flex justify-content-center gap-5 mt-4  ">
            <Card
            imgSrc={ultimatepizza}
            imgAlt={"ultimate pizza party"}
            cardH5Txt={"Ultimate pizza party"} 
            cardPTxt={"70$"}
            Onclick={""}
            cardBtntXT={"BOOK"}
            />
            <Card
            imgSrc={liveactionshow}
            imgAlt={"liveactionshow"}
            cardH5Txt={"Live action animatronic show"} 
            cardPTxt={"79$"}
            Onclick={""}
            cardBtntXT={"Book"}
            />
            <Card
            imgSrc={arcadeparty}
            imgAlt={"arcadeparty"}
            cardH5Txt={"Arcade Party"} 
            cardPTxt={"60$"}
            Onclick={""}
            cardBtntXT={"Book"}
            />
            <Card
            imgSrc={birthdayparty}
            imgAlt={"birthdayparty"}
            cardH5Txt={"Birthday party"} 
            cardPTxt={"99$"}
            Onclick={""}
            cardBtntXT={"Book"}
            />
        </div>

        <Footer/>

        </>
    )
}