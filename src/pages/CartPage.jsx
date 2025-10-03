import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease, removeItem } from '../features/cartSlice'
import { Link } from 'react-router-dom'

export default function CartPage(){
  const items = useSelector(s => s.cart.items)
  const dispatch = useDispatch()
  const list = Object.values(items)
  const totalCount = list.reduce((s,i)=>s+i.qty,0)
  const totalCost = list.reduce((s,i)=>s+i.qty*i.price,0)

  return (
    <div>
      <h2>Your Cart</h2>
      <p>Total Plants: <strong>{totalCount}</strong></p>
      <p>Total Cost: <strong>${totalCost.toFixed(2)}</strong></p>

      {list.length===0 && <p>Your cart is empty. <Link to="/products">Keep shopping</Link></p>}

      {list.map(p=>(
        <div className="cart-item" key={p.id}>
          <div className="cart-thumb">{p.thumbnail}</div>
          <div className="cart-details">
            <h4>{p.name}</h4>
            <p>Unit Price: ${p.price.toFixed(2)}</p>
            <div className="qty-controls">
              <button onClick={()=>dispatch(decrease(p.id))} className="small">-</button>
              <span className="qty">{p.qty}</span>
              <button onClick={()=>dispatch(increase(p.id))} className="small">+</button>
              <button onClick={()=>dispatch(removeItem(p.id))} className="small danger">Delete</button>
            </div>
          </div>
        </div>
      ))}

      <div className="cart-actions">
        <button onClick={()=>alert('Coming Soon')} className="btn">Checkout</button>
        <Link to="/products" className="btn ghost">Continue Shopping</Link>
      </div>
    </div>
  )
}
