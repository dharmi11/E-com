// import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../App.css"
import logo from '../assets/download (2).png';
const Nav = () => {
  const auth = localStorage.getItem("user")

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup")
  }


  return (
    <div>
      {/* <img src={logo} alt="Logo" className="logo" /> */}

      {auth ?
        <ul className='nav-ul'>
         
          <li><Link to="/">Product</Link></li>
          <li><Link to="/add">Add Product</Link></li>
          <li><Link to="/update">Update Product</Link></li>

          <li><Link to="/profile">Profile</Link></li>
          <li >
            <Link onClick={logout}  to="/logout">
              Logout  <span   style={{ fontWeight: "bold", color: "purple", padding: "20px", margin: "5px" }}>
                ({JSON.parse(auth).name})
                </span>
            </Link>
          </li>
        </ul>
        :
        <ul className='nav-ul right'>
          <li><Link to="/Signup">Sign up </Link></li>
          <li><Link to="/Login">Login </Link></li>
        </ul>


      }
    </div>

  )
}
export default Nav 