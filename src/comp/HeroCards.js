import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function HeroCards(props) {
    return (
        <div>
             <div className="hero-cards m-2" onClick={() => props.travelplacename(props.id) } >
<img src={props.img} alt="" className="card-img"/>
                  </div>
        </div>
    )
}

export default HeroCards
