import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item1 = () => {
  let navigate = useNavigate()
  let handleSubmit = (e) => {
    e.preventDefault()
    navigate("/home/item2")
  }
  return (
    <div style={{ width: "75vw", background: "yellow", height: "70vh" }}>
      <h1>Login Form</h1>
      <form action="">
        <input type="text" /> <br /> <br />
        <input type="text" /><br /> <br />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}

export default Item1