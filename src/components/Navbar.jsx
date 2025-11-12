import { ShoppingBag, Menu } from 'lucide-react'

export default function Navbar({ cartCount, onCartClick }) {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-neutral-200/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded hover:bg-neutral-100"><Menu size={20} /></button>
          <div className="font-serif text-xl tracking-wide">Maison Légère</div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
          <a href="#shop" className="hover:text-neutral-900">Shop</a>
          <a href="#about" className="hover:text-neutral-900">About</a>
          <a href="#care" className="hover:text-neutral-900">Care</a>
        </nav>
        <button onClick={onCartClick} className="relative p-2 rounded hover:bg-neutral-100">
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-neutral-900 text-white text-[10px] px-1.5 py-0.5 rounded-full">{cartCount}</span>
          )}
        </button>
      </div>
    </header>
  )
}
