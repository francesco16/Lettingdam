import React, {Component} from 'react';
import ListingSmall from '../ListingSmall/ListingSmall';
import {FaMapMarkedAlt, FaThList} from 'react-icons/fa'
import Map from '../Map/Map';
import Footer from '../Footer/Footer'
import './ListingsList.scss';

export default class ListingsList extends Component {
  state = {
    hovered: '',
    center: {
    lat: 52.37388889,
    lng: 4.88944444
    },
    showMap: false
  };
  hoverEnter(item){
    this.setState({hovered: item.name});
    this.setState( {center: {
      lat: item.lat,
      lng: item.lng
    }});
  };
  hoverLeave(){
    this.setState({hovered: ''})
  };
  showMap(){
    this.setState({showMap: !this.state.showMap});
  };
  static resizeHandler(event){
    if(event.target.innerWidth > 776 && this.state.showMap === true){
      this.setState({showMap: false})
    }
  }
  componentDidMount(){
    window.addEventListener('resize', this.resizeHandler)
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.resizeHandler)
  }
  render(){
    return (
      <section className="listingsList-wrapper">
        <section className="listingsList">
          <div className="listingsList__mapToggle" onClick={()=>this.showMap()}>
            {
              this.state.showMap
              ?
              <FaThList/>
              :
              <FaMapMarkedAlt/>
            }
          </div>
          <div className="listingsList__center" >
            {
              this.props.listings.length === 0 
              ?              
              <div className="empty-search">
                <h3>unfortunately no listings matched your searched parameters</h3>
              </div> 
              :
              this.props.listings.map(item=>{
                return <div 
                onMouseEnter={() => this.hoverEnter(item)}
                onMouseLeave={() => this.hoverLeave()}
                key={item.id}
                >
                <ListingSmall 
                key={item.id} 
                listing={item}
                />
                </div>
              })  
            }
          </div>
          <Footer styling="footer footer-clear"/>
        </section>
        {
          <section className={this.state.showMap?"listingList-map showListList-map":"listingList-map"}>
            <Map
            listings = {this.props.listings}
            hovered = {this.state.hovered}
            center={this.state.center}
            />
          </section>
        }
      </section>
    )
  };
}
