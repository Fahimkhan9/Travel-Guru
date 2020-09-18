import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./HeroSection.css"
import { useState } from 'react'
import travelplacedata from '../data/travelplacedata'
import HeroCards from './HeroCards'
import { Link } from 'react-router-dom'
function HeroSection() {
   
    const [name,setName] = useState("Sajek Valley")
    const [about,setAbout] = useState("Sajek Valley  is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. The valley is 1,476 feet above sea level. Sajek valley is known as the Queen of Hills & Roof of Rangamati")
    
    const travelplacename =(id) => {
        const filter = travelplacedata.find(tplace => tplace.id === id)
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
    <Link to="/destination/1">
    <button className="btn btn-warning btn-booking">Booking</button>
    </Link>
     
                    </div>
                    <div className="col-md-7  " style={{display:'flex'}}>
                 {
                     travelplacedata.map(tplace => <HeroCards title={tplace.title} img={tplace.img} travelplacename={travelplacename} id={tplace.id} />)
                 }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
