import React from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
import defaultImg from '../../images/utilities/logoBox.jpg';
import './ListingSmall.scss';

export default function ListingSmall({listing}) {
  const {name, slug, images, price, capacity} = listing;
  return (
    <Link to={`/listings/${slug}`} >
      <article className="listingSmall" >
        <div className="listingSmall_imgContainer">
          <img className="listingSmall_imgContainer_img" src={images[0] || defaultImg} alt="room"/>
        </div>
        <div className="listingSmall_info">
          <p className="listingSmall_info_name">{name}</p>
          <p className="listingSmall_info_price">{price} € PCM</p>
          <p className="listingSmall_info_rooms">{capacity} </p>
        </div>
      </article>
    </Link>
  )
}
ListingSmall.propTypes = {
  listing:propTypes.shape({
    name: propTypes.string.isRequired,
    slug: propTypes.string.isRequired,
    images: propTypes.arrayOf(propTypes.string).isRequired,
    price: propTypes.number.isRequired
  })
}
