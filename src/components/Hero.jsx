import { MoveRight } from 'lucide-react'

export default function Hero({ onShop }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(161,131,60,0.14),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(36,36,36,0.18),transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-36 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-xs text-neutral-500">Winter 2025</p>
          <h1 className="mt-4 text-5xl sm:text-6xl font-medium leading-tight text-neutral-900">
            ComfyPal
            <span className="block text-neutral-500">Cashmere-Soft Warmth</span>
          </h1>
          <p className="mt-6 text-neutral-600 max-w-md">
            Luxurious thermal leggings engineered for elegance, comfort, and warmth. Designed for women who move through winter with quiet confidence.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <button onClick={onShop} className="inline-flex items-center gap-2 bg-neutral-900 text-white px-5 py-3 rounded-full hover:bg-neutral-800 transition">
              Shop The Collection <MoveRight size={18} />
            </button>
            <a href="#about" className="text-neutral-700 hover:text-neutral-900">Our Story</a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-neutral-500">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-600" /> Ultra-warm fleece lining</div>
            <div className="hidden sm:flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-neutral-500" /> Sculpting high-rise fit</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[3/4] rounded-3xl bg-gradient-to-tr from-neutral-900 to-neutral-700 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-25 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI5MTcyNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white/90">
              <p className="text-sm tracking-widest uppercase">Signature Thermal</p>
              <p className="text-lg">Brushed Cashmere Blend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
