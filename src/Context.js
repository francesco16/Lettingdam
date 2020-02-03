import React, { Component } from 'react';
import Client from './Contentful';

const ListingContext = React.createContext(); 
class ListingProvider extends Component { 
  state={
    listings: [],
    sortedListings: [],
    featuredListings:[],
    loading: true,
    surface: 'All',
    capacity: '...',
    sort: '',
    price: 0,
    minPrice: 500,
    maxPrice: 0
  };
  getData = async () =>{
    try{
      let response = await Client.getEntries({
        content_type: "lettingdam"
      })
      let listings = this.formatData(response.items);
      let featuredListings = listings.filter(listing => listing.featured === true);
      let maxPrice = Math.max(...listings.map(item=>item.price));
      let maxSize = Math.max(...listings.map(item=>item.size));
      this.setState({
        listings, 
        featuredListings, 
        sortedListings: listings, 
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize
      })
    }catch(error){
      console.error(error)
    }
  }
  componentDidMount(){
    this.getData();
  }
  formatData(items){
    let tempItems = items.map(item=>{
      let id = item.sys.id;
      let images = item.fields.images.map(image=>image.fields.file.url);
      let listing = {...item.fields, images, id};
      return listing
    });
    return tempItems
  }
  getListing = slug =>{
    let tempListings = [...this.state.listings];
    const listing = tempListings.find(listing => listing.slug === slug);
    return listing
  }
  filterListings = ()=>{
    let{
      listings,
      surface,
      capacity,
      sort,
      price
    } = this.state
    let tempListings = [...listings];
    price = parseInt(price)
    if(sort === 'Price Ascending'){
      tempListings = tempListings.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if(sort === 'Price Descending'){
      tempListings = tempListings.sort((a, b) => Number(b.price) - Number(a.price));
    }
    if(surface !== 'All'){
      tempListings = tempListings.filter(listing=>listing.surface === surface)
    }
    if(capacity !== '...'){
      tempListings = tempListings.filter(listing=>listing.capacity <= capacity)
    }
    tempListings = tempListings.filter(listing=>listing.price <= price)
    this.setState({
      sortedListings: tempListings
    })
  }
  handleChange = event =>{
    const target = event.target;
    const value = target.surface === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    }, this.filterListings)        
  }
  render() {
    return (
      <ListingContext.Provider value={{...this.state, 
      getListing: this.getListing, 
      handleChange: this.handleChange}}
      >
        {this.props.children}
      </ListingContext.Provider>
    )
  }
}
const ListingConsumer = ListingContext.Consumer;
export function withListingConsumer(Component){
  return (function ConsumerWrapper(props){
    return (
      <ListingConsumer>
        {
          value => <Component {...props} context={value}/>
        }
      </ListingConsumer>
    )
  })
}

export {ListingProvider, ListingConsumer, ListingContext};