import React from 'react';
import './Hero.scss';

export default function Hero({children, styling}) {
  return (
    <header className={styling}>
      {children}
    </header>
  )
}
Hero.defaultProps={
  hero:'defaultHero'
}