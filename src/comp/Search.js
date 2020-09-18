import React from 'react'
import Nav from './Nav'
import './search.css'
import hoteldata, { mapsrc } from '../data/hoteldata'
import { useParams } from 'react-router-dom'
function Search() {
    const {fid} = useParams()
   
   const fil = hoteldata.filter(d => d.id === parseInt(fid))
   console.log(fil);
   const filmapsrc=  mapsrc.find(d => d.id === parseInt(fid))
   console.log(filmapsrc);
    return (
        <div className="container-fluid search">
            <Nav/>
            <div className="row">
                <div className="col-md-6">
                    {/* {id} */}
                {
                    fil.map(hdata => {
                    return(    <div class="card mb-3" style={{maxwidth: "540px"}}>
  <div class="row no-gutters">
    <div class="col-md-5">
      <img src={hdata.img} class="card-img" alt="..."/>
    </div>
    <div class="col-md-7">
      <div class="card-body">
                    <h5 class="card-title">{hdata.name}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
   
      </div>
    </div>
  </div>
</div>

                    )
                    })
                }
</div>
<div className="col-md-6">
<iframe src={filmapsrc.src} width="600" height="450" frameborder="0" style={{border: '0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</div>
                </div>
            </div>
        
    )
}

export default Search
