import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero'; 
import Banner from '../../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../../components/Services';
import FeaturedListings from '../../components/FeaturedListings';
import Comments from '../../components/Comments';
import QuestionForm from '../../components/QuestionForm';
import Footer from '../../components/Footer';
import './Home.scss';

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="homeWrapper">
      <Hero styling="homeHero">
        <Banner title="find your place" subtitle="a definitely not real estate agency" styling="bannerHomeTop">
          <Link to="/listings" className="btn-primary">
            <p>our listings</p>
          </Link>
        </Banner>
      </Hero>
      <Services/>
      <FeaturedListings/>
      <Comments />
      <QuestionForm />
      <Footer styling="footer"/>
    </div>
    </>
  )
}
