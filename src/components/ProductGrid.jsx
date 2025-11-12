import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function ProductGrid({ onAddToCart }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API}/products`)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-[3/4] rounded-2xl bg-neutral-100 animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <section id="shop" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-medium mb-6">Featured</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="group">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100">
              <img src={p.images?.[0] || 'https://images.unsplash.com/photo-1574755393849-623942496936?q=80&w=1200&auto=format&fit=crop'} alt={p.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-3 flex items-start justify-between">
              <div>
                <p className="text-sm text-neutral-500">{p.fabric || 'Thermal Knit'}</p>
                <h3 className="text-neutral-900">{p.title}</h3>
              </div>
              <div className="text-neutral-900">${'{'}p.price.toFixed(2){'}'}</div>
            </div>
            <button onClick={() => onAddToCart(p)} className="mt-3 w-full bg-neutral-900 text-white py-2 rounded-full hover:bg-neutral-800">Add to bag</button>
          </div>
        ))}
      </div>
    </section>
  )
}
