import React from 'react';
import Footer from '../footer/Footer';
import Nav from '../navbar/Nav';

const Layout = ({ children }) => (
  <>
    <Nav />
    <main>
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
