import React from 'react'
import { Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function HeroCards(props) {
    return (
        <div>
            <Link to={"/destination/"+props.id}>
            <div className="hero-cards m-2" onClick={() => props.travelplacename(props.id) } >
<img src={props.img} alt="" className="card-img"/>
    <h3 className="card-title">{props.title}</h3>
                  </div>
            </Link>
             
        </div>
    )
}

export default HeroCards
