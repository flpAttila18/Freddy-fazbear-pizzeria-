import { useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import bck from "../assets/bookbck.png"
import '../cssfolder/party.css'
import { useState } from "react"




export default function Parties() {
    const location = useLocation()
    const { party } = location.state || {}

    const [date, setDate] = useState("")
    const [guests, setGuests] = useState("")


    return (
        <>
        <div className="page-bg d-flex flex-column min-vh-100">
            <Navbar />
            
            <div className=" d-flex container flex-grow-1 align-items-center justify-content-center p-5">
                <div className="card shadow-lg p-4 party-card">
            {party === "ultimate" && (
                <div>
                    <h3 className="mb-4">Ultimate pizza party</h3>

                    <input className="form-control mb-3" placeholder="Number of the guest"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                    />

                    <select className="form-select mb-3" >
                        <option>Classic Cheese</option>
                        <option>pepperoni</option>
                        <option>Veggie</option>
                    </select>

                    <select className="form-select mb-3">
                        <option>Soft drinks</option>
                        <option>juice</option>
                        <option>water</option>
                    </select>

                    <input type="date"
                        className="form-control mb-4"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <button className="btn btn-dark w-100" disabled={!date} onClick={()=>alert(`Party is book to ${date}`)}>
                        Book a party
                    </button>

                </div>
            )}
            {party === "live" && (
                <div>
                    <h3>Live animatronic show</h3>

                    <select className="form-select mb-3">
                        <option>Freddy</option>
                        <option>Bonnie</option>
                        <option>Chica</option>
                        <option>Foxy</option>
                    </select>

                    <input
                        type="number"
                        className="form-controll mb-3"
                        placeholder="Show duration (minutes)"
                    />

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="special requests"
                    />
                    <input type="date"
                        className="form-control mb-4"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <button className="btn btn-dark w-100" disabled={!date} onClick={()=>alert(`Party is book to ${date}`)}>
                        Book a party
                    </button>
                </div>
            )}

            {party === "arcade" && (
                <div>
                    <h3 className="mb-4">🕹️ Arcade Party</h3>

                    <input
                        type="number"
                        className="form-control mb-3"
                        placeholder="Number of players"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                    />

                    <select className="form-select mb-3">
                        <option>Free play</option>
                        <option>Token based</option>
                    </select>

                    <input
                        className="form-control mb-3"
                        placeholder="Party duration"
                    />
                    <input type="date"
                        className="form-control mb-4"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <button className="btn btn-dark w-100" disabled={!date} onClick={()=>alert(`Party is book to ${date}`)}>
                        Book a party
                    </button>
                </div>
            )}

            {party === "bday" && (
                <div>
                    <h3 className="mb-4">🎂 Birthday Party</h3>

                    <input
                        className="form-control mb-3"
                        placeholder="Birthday child's name"
                    />

                    <input
                        type="number"
                        className="form-control mb-3"
                        placeholder="Age"
                    />

                    <input
                        type="number"
                        className="form-control mb-3"
                        placeholder="Number of guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                    />
                    <input type="date"
                        className="form-control mb-4"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <button className="btn btn-dark w-100" disabled={!date} onClick={()=>alert(`Party is book to ${date}`)}>
                        Book a party
                    </button>
                </div>
            )}
            </div>
            </div>
            <Footer />
            </div>
        </>
    )
}

