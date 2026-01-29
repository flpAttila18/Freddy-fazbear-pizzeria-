import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../cssfolder/index.css'
import Navbar from "../components/Navbar"
import freddy from "../assets/freddypng.png"
import bonnie from "../assets/bonniepng.png"
import chica from "../assets/chicapng.png"
import foxy from "../assets/foxypng.png"
import Bigimg from "../components/Bigimg"
import Footer from "../components/Footer"
import Animatronitem from "../components/Animatronitems"
import { useLocation  } from "react-router-dom" 


export default function Animatronics() {


 



    const location = useLocation()

    const {animatron } = location.state ||{}

    const plist = ["Bonnie is the cheerful and energetic guitarist of the Fazbear Band, always ready to rock the stage and lift everyone’s spirits. With his signature purple color and friendly smile, he loves strumming his guitar, playing fun tunes, and entertaining the crowd. Whether jamming out a song or striking a playful pose, Bonnie spreads music and joy wherever he goes.Bonnie is kind, enthusiastic, and always ready to make everyone smile, whether with a catchy riff, a joke, or a playful gesture. His goal is simple: to make every show lively, fun, and unforgettable.", "Freddy Fazbear is the cheerful leader of the Fazbear Band and the heart of the stage at Freddy Fazbear’s Pizza. With his classic top hat and warm smile, Freddy loves to sing, entertain, and make everyone feel welcome. He enjoys being in the spotlight, sharing music with his friends, and turning every show into a fun and unforgettable experience.Freddy is kind, confident, and always ready to cheer you up with a song or a joke. Whether he’s holding his microphone or waving to the crowd, Freddy’s goal is simple: make sure everyone is smiling and having a great time.", "Chica is the cheerful and energetic member of the Fazbear Band, always ready to brighten everyone’s day. With her signature yellow color and warm smile, she loves being on stage, sharing her love of music, and making the crowd feel welcome. She is never without her loyal Cupcake, who joins in the fun and brings joy to everyone. Whether holding her microphone, dancing, or showing off Cupcake’s playful antics, Chica brings excitement and fun to every performance.Chica is kind, lively, and always ready to put a smile on everyone’s face, whether with a song, a laugh, or Cupcake’s playful presence. Her goal is simple: to make every show full of joy and unforgettable moments.", "Foxy is the daring and adventurous pirate of the Fazbear Band, always ready to sail into excitement on stage. With his bold reddish color, eye patch, and confident grin, he brings a swashbuckling energy to every performance. Whether strumming his guitar like a true buccaneer or striking a playful pirate pose, Foxy makes every show feel like an exciting treasure hunt.Foxy is brave, lively, and always ready to make everyone cheer or laugh with his daring pirate antics. His goal is simple: to make every performance thrilling, full of fun, and an unforgettable adventure for all."]
    const piclist = [bonnie, freddy, chica, foxy]
    const cardplist1 = ["red bowtie", "black bowtie and black cilinder", "lets eat eater", "brow shorts"]
    const cardplist2 = ["red guitar","michrofon","dont have","dont have"]




    return (
        <>
            <Navbar />

            <div className=" container vh-100 d-flex justify-content-center align-items-center">
                <div className="row justify-content-center align-items-center w-100">


                    <div className="col-md-4 d-flex justify-content-center ">
                        <p className="cardmarginp">{plist[animatron -1]}</p>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center mt-5">
                        <Bigimg
                            Source={piclist[animatron -1]}
                        />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center mb-5 cardmargin">
                        <Animatronitem
                            H5={"LOOK"}
                            P={cardplist1[animatron -1]}
                        />
                        <Animatronitem
                            H5={"instrumen"}
                            P={cardplist2[animatron -1]}
                        />

                    </div>

                </div>
            </div>

            <div className="footermargin">
            <Footer />
            </div>
        </>
    )
}