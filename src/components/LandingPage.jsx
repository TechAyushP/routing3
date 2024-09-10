import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div style={{ height: "100vh", background: "gray" }}>
      <h1>LandingPage</h1>
      <Link to="/home" >Get Started</Link>
    </div>
  )
}

export default LandingPage