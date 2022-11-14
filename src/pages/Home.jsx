import React from 'react';
import CardList from '../components/CardList';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <CardList></CardList>
      <Footer></Footer>
    </>
  );
}

export default Home;
