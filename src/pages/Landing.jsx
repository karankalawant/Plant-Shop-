import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing(){
  return (
    <div className="landing">
      <div className="hero">
        <h1>LeafMart</h1>
        <p>Your trusted online houseplant store. Bringing green vibes to your home!</p>
        <Link to="/products" className="btn">Get Started</Link>
      </div>
    </div>
  )
}
