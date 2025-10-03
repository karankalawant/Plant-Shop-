import React from 'react'
import PRODUCTS from '../data/products'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../features/cartSlice'

export default function ProductsPage(){
  const dispatch = useDispatch()
  const items = useSelector(s => s.cart.items)
  const categories = [...new Set(PRODUCTS.map(p=>p.category))]

  return (
    <div>
      <h2>Our Plants</h2>
      {categories.map(cat=>(
        <section key={cat} className="category-section">
          <h3>{cat}</h3>
          <div className="grid">
            {PRODUCTS.filter(p=>p.category===cat).map(p=>{
              const inCart = Boolean(items[p.id])
              return (
                <div className="card" key={p.id}>
                  <div className="thumb">{p.thumbnail}</div>
                  <h4>{p.name}</h4>
                  <p className="price">${p.price.toFixed(2)}</p>
                  <button
                    className="btn add-btn"
                    onClick={()=>dispatch(addItem(p))}
                    disabled={inCart}
                  >
                    {inCart ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
