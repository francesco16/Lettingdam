import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import {Link} from 'react-router-dom';
import Banner from '../../components/Banner';

export default function Error() {
  return (
    <>
    <Navbar />
    <Hero>
      <Banner title="404" subtitle="page not found" styling="bannerError">
        <Link to="/" className="btn-primary">
          Return to Home
        </Link>
      </Banner>
    </Hero>
    </>
  )
}
