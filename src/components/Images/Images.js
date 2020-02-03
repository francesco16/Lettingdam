import React from 'react';
import Carousel from '../Carousel'
import './Images.scss';

export default function Images(props) {
  return (
    <Carousel 
    images={props.images} 
    backgroundColor="black"
    height="100%"
    width="100%"
    zIndex="0"
    position="absolute"
    />
  )
}
