import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Landing from './pages/Landing'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'

export default function App(){
  return (
    <div className="app-root">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/products" element={<ProductsPage/>} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
      </main>
    </div>
  )
}
