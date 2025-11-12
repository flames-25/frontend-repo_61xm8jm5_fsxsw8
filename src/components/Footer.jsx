export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/70 mt-24 bg-[#fffdfa]">
      <div className="max-w-6xl mx-auto px-6 py-10 grid sm:grid-cols-3 gap-8 text-sm text-neutral-600">
        <div>
          <div className="font-serif text-lg text-neutral-900">ComfyPal</div>
          <p className="mt-3">Quiet luxury for modern winters. Thoughtfully made, beautifully warm.</p>
        </div>
        <div>
          <div className="text-neutral-900 mb-2">Help</div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-neutral-900">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-neutral-900">Size Guide</a></li>
            <li><a href="#" className="hover:text-neutral-900">Care</a></li>
          </ul>
        </div>
        <div>
          <div className="text-neutral-900 mb-2">Newsletter</div>
          <form className="flex gap-2">
            <input type="email" placeholder="Your email" className="flex-1 border border-neutral-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200" />
            <button className="bg-neutral-900 text-white rounded-full px-4 hover:bg-neutral-800">Join</button>
          </form>
        </div>
      </div>
      <div className="text-center text-xs text-neutral-500 py-6">© {new Date().getFullYear()} ComfyPal</div>
    </footer>
  )
}
