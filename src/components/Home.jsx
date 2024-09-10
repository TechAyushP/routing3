import React from 'react'
import Navbar from './Navbar'
import Aside from './Aside';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Aside />
        <Outlet />
      </div>

      <Footer></Footer>

    </div>
  )
}

export default Home