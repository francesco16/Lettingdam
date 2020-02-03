import React from 'react';
import loadingGif from '../../images/gif/loading.gif'
import './Loading.scss'

export default function Loading() {
  return (
    <div className="loading">
      <h4>Loading listings...</h4>
      <img className="loadingGif" src={loadingGif} alt="loading"/>
    </div>
  )
}
