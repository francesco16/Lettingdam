import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../../images/utilities/logoBox.jpg';
import propTypes from 'prop-types';
import './Listing.scss';

export default function Listing({listingProp}) {
  const {name, slug, images, price} = listingProp
  return (
    <Link to={`/listings/${slug}`} className="btn-secondary">
      <article className="listing" >
        <div className="imgContainer">
          <img className="imgContainer_img" src={images[0] || defaultImg} alt="listing"/>
          <div className="imgContainer_price-top">
            <h6>€{price}</h6>
            <p>pcm</p>
          </div>
        </div>
        <p className="listingInfo">{name}</p>
      </article>
    </Link>
  )
};
Listing.propTypes = {
  listing: propTypes.shape({
    name: propTypes.string.isRequired,
    slug: propTypes.string.isRequired,
    images: propTypes.arrayOf(propTypes.string).isRequired,
    price: propTypes.number.isRequired
  })
};
