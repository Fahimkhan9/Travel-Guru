import React from 'react'
import Nav from './Nav'
import './search.css'
import hoteldata from '../data/hoteldata'
import { useParams } from 'react-router-dom'
function Search() {
    const {id} = useParams()
    return (
        <div className="container-fluid search">
            <Nav/>
            <div className="row">
                <div className="col-md-6">
                    {id}
                {
                    hoteldata.map(hdata => {
                    return(    <div class="card mb-3" style={{maxwidth: "540px"}}>
  <div class="row no-gutters">
    <div class="col-md-5">
      <img src={hdata.img} class="card-img" alt="..."/>
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
                    )
                    })
                }
</div>
                </div>
            </div>
        
    )
}

export default Search
