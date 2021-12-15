import React from 'react';
import { Helmet } from 'react-helmet';
import HeroArea from '../../components/hero-area/HeroArea';

const Home = () => (
  <div>
    <Helmet>
      <title>Home || URL Shortener</title>
    </Helmet>
    <HeroArea />
  </div>
);

export default Home;
