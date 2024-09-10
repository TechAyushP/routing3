import React from 'react'
import { Link } from 'react-router-dom'

const Aside = () => {
  return (
    <div style={{ width: "25vw", height: "70vh", background: "orange" }}>
      <nav style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "100%", color: "white", flexDirection: "column" }}>
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

export default Aside