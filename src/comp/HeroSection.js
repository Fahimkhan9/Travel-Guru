import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./HeroSection.css"
import { useState } from 'react'
import sajek from '../Image/Sajek.png'
import sundarban from '../Image/sundorbon.png'
import sreemongol from '../Image/Sreemongol.png'
import HeroCards from './HeroCards'
function HeroSection() {
    const [travelPlace,setTravelPlace] = useState([
        {
            img: `${sajek}`,
            title: 'Sajek',
            id: 1,
            about: "Sajek Valley  is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. The valley is 1,476 feet above sea level. Sajek valley is known as the Queen of Hills & Roof of Rangamati"
        },
        {
            img: `${sundarban}`,
            title: 'Sundarbon',
            id: 2,
            about: "The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh."
        },
        {
            img: `${sreemongol}`,
            title: 'Sreemongol',
            id: 3,
            about: 'Sreemangal is an Upazila of Moulvibazar District in the Sylhet Division of Bangladesh.'
        },
    ])
    const [name,setName] = useState("Sajek Valley")
    const [about,setAbout] = useState("Sajek Valley  is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. The valley is 1,476 feet above sea level. Sajek valley is known as the Queen of Hills & Roof of Rangamati")
    const travelplacename =(id) => {
        const filter = travelPlace.find(tplace => tplace.id === id)
        setName(filter.title)
        setAbout(filter.about)
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row pt-5">
                    <div className="col-md-4 d-flex flex-column  justify-content-center">
    <h3 className="display-3">{name}</h3>
    <p>{about}</p>
       <button className="btn btn-warning btn-booking" >Booking</button>
                    </div>
                    <div className="col-md-7  " style={{display:'flex'}}>
                 {
                     travelPlace.map(tplace => <HeroCards img={tplace.img} travelplacename={travelplacename} id={tplace.id} />)
                 }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
