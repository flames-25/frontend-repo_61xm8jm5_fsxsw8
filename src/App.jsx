import { useEffect, useMemo, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || ''

function App() {
  const [cart, setCart] = useState([])

  const cartCount = useMemo(() => cart.reduce((a, c) => a + (c.quantity || 1), 0), [cart])

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id)
      if (found) {
        return prev.map((p) => (p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const handleShopScroll = () => {
    const el = document.getElementById('shop')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleCheckout = async () => {
    if (cart.length === 0) return
    const payload = {
      items: cart.map((c) => ({ product_id: c.id, quantity: c.quantity })),
      customer_name: 'Guest',
      customer_email: 'guest@example.com',
      shipping_address: '123 Winter St, Snow City',
    }
    try {
      const res = await fetch(`${API}/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const id = await res.json()
      alert(`Order placed! ID: ${id}`)
      setCart([])
    } catch (e) {
      alert('Checkout failed')
    }
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar cartCount={cartCount} onCartClick={handleCheckout} />
      <Hero onShop={handleShopScroll} />
      <main>
        <ProductGrid onAddToCart={handleAddToCart} />
      </main>
      <Footer />
    </div>
  )
}

export default App
