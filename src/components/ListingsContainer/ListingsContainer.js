import React from 'react';
import ListingsFilter from '../ListingsFilter';
import ListingsList from '../ListingsList/ListingsList';
import { withListingConsumer } from '../../Context';
import Loading from '../Loading/Loading';
import './ListingsContainer.scss';

function ListingContainer ({context}){
  const {loading, sortedListings, listings} = context;
  if (loading){
    return <Loading/>
  };
  return (
    <section className="listingsContainer-wrapper">
      <ListingsFilter listings={listings}/>
      <ListingsList listings={sortedListings}/>
    </section>
  );
}

export default withListingConsumer(ListingContainer)



