import React, { Component } from 'react';
import {FaHeadset, FaHeart} from 'react-icons/fa'; 
import './Services.scss';

export default class Services extends Component {
  state={
    services:[
      {
        icon: <FaHeadset/>,
        title: 'always present',
        info: 'we offer a 24/7 assistance service to answer for maintainment emergency'
      },
      {
        icon: <FaHeart/>,
        title: 'we are loved',
        info: 'proudly rated excellent by our lovely tennants and landlords'
      }
    ]
  }
  render() {
    return (
      <section className="services" >
        <div className="services_center">
          {this.state.services.map((item, index)=>{
            return (
            <article key={index} className="services_center_service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
            );
          })}
        </div>
      </section>
    )
  }
}

