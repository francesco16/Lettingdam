import React from 'react';
import CarouselAuto from '../CarouselAuto';
import {comment1, comment2, comment3} from '../../images/Comments/ImagesComments';

const commentsArray = [
 comment1,
 comment2,
 comment3
];
export default function Comments() {
  return (
    <div className="Comments">
      <CarouselAuto
      images={commentsArray} 
      backgroundColor="transparent"
      height="200px"
      width="100vw"
      zIndex="0"
      position="relative"
      />
    </div>
  );
}

