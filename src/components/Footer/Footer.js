import React from 'react'
import {FaFacebookSquare, FaTwitter, FaEnvelope} from 'react-icons/fa'
import './Footer.scss';

export default function Footer(props) {
  return (
    <div className={props.styling}>
      <div className="footer-social">
        <FaFacebookSquare/><FaTwitter/><FaEnvelope/>
      </div>
      <div className="footer-address">
        <h2>Lettingdam</h2>
        <h4>Random Road, 23</h4>
        <h4>Amsterdam,  Netherlands</h4>
      </div>
    </div>
  )
}
