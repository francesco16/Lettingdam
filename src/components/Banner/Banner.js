import React from 'react';
import './Banner.scss';

export default function Banner({children, title, subtitle, styling}) {
  return (
    <div className={styling}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {children}
    </div>
  )
}
