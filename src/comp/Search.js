import React from "react";
import Nav from "./Nav";
import "./search.css";
import hoteldata, { mapsrc } from "../data/hoteldata";
import { useParams } from "react-router-dom";
function Search() {
  const { filterdataid } = useParams();

  const filterhoteldata = hoteldata.filter((d) => d.id === parseInt(filterdataid));

  const filtermapsrc = mapsrc.find((d) => d.id === parseInt(filterdataid));
  
  return (
    <div className="container-fluid search">
      <Nav />
      <div className="row">
        <div className="col-md-6">
          {/* {id} */}
          {filterhoteldata.map((hdata) => {
            return (
              <div class="card mb-3" style={{ maxwidth: "540px" }}>
                <div class="row no-gutters">
                  <div class="col-md-5">
                    <img src={hdata.img} class="card-img" alt="..." />
                  </div>
                  <div class="col-md-7">
                    <div class="card-body">
                      <h5 class="card-title">{hdata.name}</h5>
                      <p class="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-6">
          <iframe
            src={filtermapsrc.src}
            width="600"
            height="500"
            frameborder="0"
            style={{ border: "0" }}
            
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Search;
