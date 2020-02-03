import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapPin from '../MapPin';

export default class Map extends Component {
  render() {
    return (
      <div style={{ height: 'calc(100vh - 140px)', width: '100%'}}>
        <GoogleMapReact
        defaultCenter={
          {lat: 72.37388889,
          lng: 4.88944444}
          }
        defaultZoom={13.5}
        center={this.props.center}
        >
          {
            this.props.listings.map(item=>{ 
              return (
                <MapPin
                listing={item}
                key={item.id}
                lat={item.lat}
                lng={item.lng}
                hovered={this.props.hovered}
                />
              )
            })
          }
        </GoogleMapReact>
      </div> 
    )
  }
}

