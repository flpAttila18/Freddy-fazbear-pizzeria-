import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../cssfolder/order.css'
import '../cssfolder/pizzas.css'

import Image from "../components/image"
import logo from '../assets/logo.png'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import foxy from '../assets/foxy.png'
import chichabake from '../assets/cichabake.png'

import { useState, useEffect } from "react"

export default function Pizzas() {
    const [pizzas, setPizzas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const response = await fetch("/jsonlists/pizzas.json")
                const data = await response.json()
                setPizzas(data)
            } catch (error) {
                console.log("Hiba a pizza betöltésénél:", error);

            } finally {
                setLoading(false)
            }
        }
        fetchPizza()
    }, [])

    if (loading) {
        return <p className="text-center mt-5">Loading pizzas... 🍕</p>
    }


    return (
        <>
            <Navbar />

            <Image
                DivCls ={"chickabake"}
                source={chichabake}
                Imgcls ={"chickabakepng"}
                Alter ={"Chica is baking a pizza"}
            />


            <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
                {pizzas.map(pizza => (
                    <div className="card Pcard" key={pizza.id}>
                        <img
                            src={pizza.img}
                            className="card-img-top"
                            alt={pizza.name}
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title">{pizza.name}</h5>
                            <p className="card-text">{pizza.price}</p>
                            <button className="btn btn-dark">Order</button>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </>
    )
}