import React, {useState, useEffect} from 'react';
import {Gallery, GalleryImage} from 'react-gesture-gallery';

export default function CarouselAuto(props) {
  const [index, setIndex] = useState(0);
  useEffect(()=>{
    let timeout = setTimeout(
      ()=> {
        if(index > props.images.length-2){
          setIndex(0)
          return
        }
        setIndex(index+1)
      }, 4000
    )
    return ()=> clearTimeout(timeout)
  }, [index, props.images.length])
  return (
    <Gallery
      style={{
        background: props.backgroundColor,
        height: props.height,
        width: props.width,
        zIndex: props.zIndex,
        position: props.position,
        padding: "0",
        maxWidth: "1440px",
        top: 0
      }}
      enableKeyboard={false}
      enableControls={false}
      enableIndicators={false}
      index={index}
    >
      {props.images.map(image => (
        <GalleryImage objectFit="contain" key={props.images} src={image} />
      ))}
    </Gallery>
  );
}
