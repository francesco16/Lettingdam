import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../components/Navbar';
import {ListingContext} from '../../Context';
import Images from '../../components/Images/Images';
import GoogleMapReact from 'google-map-react';
import MapPinStatic from '../../components/MapPinStatic/MapPinStatic';
import QuestionForm from '../../components/QuestionForm/QuestionForm';
import Footer from '../../components/Footer/Footer';
import './SingleListing.scss';

export default class SingleListing extends Component {
  state={
    slug: this.props.match.params.slug
  }  
  static contextType = ListingContext
  render() {
    const {getListing} = this.context;
    const listing = getListing(this.state.slug);
    if (!listing){
      return(
        <div className="error">
          <h3>no such listing could be found</h3>
          <center><Link to="/listings" className="btn-primary">back to listings</Link></center>
        </div>
      )
    }
    const {
      streetName, 
      description, 
      capacity, 
      size, 
      price, 
      breakfast, 
      pets,
      lat,
      lng, 
      images
    } = listing
    return (
      <>
      <Navbar />
      <section className="single-listing">
        <div className="singleListing_header">
          <h3 className="singleListing_header_name">{streetName}</h3>
          <h3 className="singleListing_header_price">{price}€ P/Mo</h3>
        </div>
        <div className="singleListing_img">
          <div className="singleListing_img_secWrapper">
            <Images 
            images={images} 
            />  
          </div>
        </div>
        <div className="single-listing-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : €{price}</h6>
            <h6>size : {size} m²</h6>
            <h6>{capacity}</h6>
            <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
            <h6>{breakfast && 'free breakfast included'}</h6>
          </article>
        </div>  
        <section className="mapSection">
          <center>
            <div className="mapContainer">
              <GoogleMapReact
              defaultCenter={
                {lat: 72.37388889,
                lng: 4.88944444}
                }
              defaultZoom={18}
              center={{lat, lng}}
              >
                <MapPinStatic
                lat={lat}
                lng={lng}
                />  
              </GoogleMapReact>
            </div> 
          </center>
        </section>
        <QuestionForm />
        <Footer styling="footer footer-clear"/>
      </section>
      </>
    )
  }
}
