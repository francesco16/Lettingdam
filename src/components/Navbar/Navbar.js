import React, {useState, useEffect} from 'react';
import {FaAlignRight} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import logo from '../../images/utilities/logo70x250.png'
import './Navbar.scss'

export default function Navbar(props){
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handler = event =>{
      if(event.target.innerWidth > 776 && isOpen === true){
        setIsOpen(!isOpen)
      }
    };
    window.addEventListener('resize', handler);
    return ()=> window.removeEventListener('resize', handler);
  });
  return (
    <nav className={props.noShadow ? "navbar noShadow" : "navbar"}>
      <div className="navbar_center">
        <div className="navbar_center_header">
          <NavLink className="navbar_center_header_logo" to="/">
            <img src={logo} alt="Lettingdam logo"/>
          </NavLink>
          <button type="button" className="nav-btn">
            <FaAlignRight className="nav-icon" onClick={()=>setIsOpen(!isOpen)} />
          </button>
        </div>
        <ul className={isOpen?"nav-links show-nav":"nav-links"} >
          <li>
            <NavLink exact to="/" onClick={isOpen ? ()=>setIsOpen(false) : null}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/listings" onClick={isOpen ? ()=>setIsOpen(false) : null}>Listings</NavLink>
          </li>
          <li>
            <p className="deadLink" onClick={isOpen ? ()=>setIsOpen(false) : null}>About Us</p>
          </li>
          <li>
            <p className="deadLink" onClick={isOpen ? ()=>setIsOpen(false) : null}>Landlords</p>
          </li>
        </ul>
      </div>
    </nav>
  )
}
