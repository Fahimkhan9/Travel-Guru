import React,{useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import'./Nav.css'
import logo from '../Logo.png'
import { NavLink } from 'react-router-dom'
function Nav(props) {
    const [menus,setMenus] = useState([
        {
        title: "News",
        id:  1,
    },
    {
        title: "Destination",
        id:  2,
    },
    {
        title: "Blog",
        id:  3,
    },
    {
        title: "Contact",
        id:  4,
    },
    
])
const [navbarClass,setNavbarClass] = useState("collapse navbar-collapse")
const [navbarstate,setNavbarState] = useState(false)
const toggle = () => {
    setNavbarClass(navbarstate ? "collapse navbar-collapse" : "collapse navbar-collapse show")
    setNavbarState(navbarstate ? false : true)
}
    return (
        <div>
            <nav class="navbar navbar-expand-lg ">
  <NavLink class="navbar-brand ml-5" to="/">
      <img src={logo} alt="" className="logo" style={{color:    `${props.color}`,filter: `${props.filter}`}} />
  </NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" onClick={toggle}></span>
  </button>

  <div class={navbarClass} id="navbarSupportedContent">
 {props.showForm &&  <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2 ml-5" type="search" placeholder="Search" aria-label="Search"/>

    </form>}
    <ul class="navbar-nav ml-auto mr-5 d-flex  justify-content-around">
     {menus.map(menu => (
        <li key={menu.id} class="nav-item active">
        <NavLink class="nav-link" style={{color: `${props.color}`} }  to="/" >{menu.title} <span class="sr-only">(current)</span></NavLink>
      </li>
     )) }
     <li className="nav-item">
         <NavLink to='/login' className="nav-link btn btn-warning text-dark p-2 btn-login">
           Login
         </NavLink>
     </li>
    </ul>
   
  </div>
</nav>
        </div>
    )
}

export default Nav
