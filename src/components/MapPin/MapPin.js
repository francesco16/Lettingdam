import React , { useState }  from 'react';
import {FaMapMarker} from 'react-icons/fa'; 
import {Link} from 'react-router-dom';
import './MapPin.scss';

export default function MapPin({ hovered, listing}) {
  const {slug, name, price, images} = listing;
  let [directHover, setDirectHover] = useState(false);
  return (
    <div className={hovered === name ? 'mapPinHovered' : 'mapPin'} 
    onMouseEnter={()=> setDirectHover(directHover = true)} 
    onMouseLeave={()=> setDirectHover(directHover = false)}
    onTouchStart={()=>setDirectHover(directHover = true)}
    >
      <FaMapMarker className="mapPin_pin"/>
      {
        directHover 
        ? 
        <Link to={`/listings/${slug}`}>
        <div className="mapPin_box">
          <img src={images[0]} alt={name} className="mapPin_box_img"/>
          <p className="mapPin_box_name">{name} <br/> <span className="mapPin_box_price">{price} P/Mo</span></p>
          <p className="mapPin_box_price"></p>
        </div>
        </Link>
        : 
        null
      }
    </div>
  )
}

