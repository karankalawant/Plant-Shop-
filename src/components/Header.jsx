import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header(){
  const items = useSelector(s => s.cart.items)
  const totalCount = Object.values(items).reduce((s,i)=>s+i.qty,0)
  const location = useLocation()

  return (
    <header className="header">
      <div className="brand"><Link to="/">LeafMart</Link></div>
      <nav className="nav">
        <Link to="/products" className={location.pathname==='/products'?'active':''}>Products</Link>
        <Link to="/cart" className={location.pathname==='/cart'?'active':''}>Cart <span className="cart-badge">🛒 {totalCount}</span></Link>
      </nav>
    </header>
  )
}
