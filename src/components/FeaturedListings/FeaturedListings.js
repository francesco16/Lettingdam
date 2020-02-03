import React, { Component } from 'react';
import {ListingContext} from '../../Context';
import Loading from '../Loading';
import Listing from '../Listing/Listing';
import './FeaturedListings.scss';

export default class FeaturedListing extends Component {
  static contextType = ListingContext;
  render() {
    let {loading, featuredListings : listings} = this.context;
    listings = listings.map(listing=>{
      return (
        <Listing key={listing.id} listingProp={listing}/>
      )
    });
    return (
      <section className="featured-listings">
        <div className="featured-listings_fadeLeft"></div>
        <h1 className="featured-listings_title">Feautured Listing</h1> 
        <div className="featured-listings_center">
          {loading ? <Loading /> : listings}
        </div>
        <div className="featured-listings_fadeRight"></div>
      </section>
    )
  }
}
