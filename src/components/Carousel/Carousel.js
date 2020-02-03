import React, {useState} from 'react';
import {Gallery, GalleryImage} from 'react-gesture-gallery';

export default function Carousel(props) {
  const [index, setIndex] = useState(0);
  return (
    <Gallery
      style={{
        background: props.backgroundColor,
        height: props.height,
        width: props.width,
        zIndex: props.zIndex,
        position: props.position,
        padding: "30px",
        top: 0
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {props.images.map(image => (
        <GalleryImage objectFit="contain" key={props.images} src={image} />
      ))}
    </Gallery>
  );
}
