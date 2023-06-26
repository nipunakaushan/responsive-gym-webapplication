import {Link, NavLink} from 'react-router-dom'
import {links} from '../data'
import {FaBars} from 'react-icons/fa'
import React from 'react'
import './navbar.css'
import Logo from '../images/logo.png'


const Navbar = () => {
  return (
    <div>
        <div className='Container nav_container'>
        {/* Logo,nav links,nav button */}
            <Link to="/" className='logo'>
                <img src={Logo} alt='Nav Logo'/>
            </Link>
                
            <ul className='nav__links'>
            {
                    links.map(({name, path},index)=>{
                        return (
                            <li>
                                <NavLink to={path}>{name}</NavLink>   
                            </li>
                        )
                    })
                }
            </ul>
                <button className='nav__toggle-btn'><FaBars/></button>
        </div>
    </div>
  )
}

export default Navbar
