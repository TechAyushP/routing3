import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{ height: "15vh", background: "gray" }}>
      <nav style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "15vh", color: "white" }}>
        <div><Link to="/home">Item1</Link></div>
        <div><Link to="/home/Item2">Item2</Link></div>
        <div><Link to="/home/Item3">Item3</Link></div>
        <div><Link to="/home/Item4">Item4</Link></div>
        <div><Link to="/home/Item5">Item5</Link></div>
        <div><Link to="/home/Item6">Item6</Link></div>
      </nav>
    </div>
  )
}

export default Navbar