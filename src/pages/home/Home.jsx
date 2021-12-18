import React from 'react';
import { Helmet } from 'react-helmet';
import HeroArea from '../../components/hero-area/HeroArea';

const Home = () => (
  <>
    <Helmet>
      <title>Home || URL Shortener</title>
    </Helmet>
    <HeroArea />
  </>
);

export default Home;
