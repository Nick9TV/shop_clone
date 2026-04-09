function App() {
  const products = [
    { id: 1, name: 'Wireless Headphones', price: '$49.99', category: 'Electronics' },
    { id: 2, name: 'Smart Watch', price: '$59.99', category: 'Electronics' },
    { id: 3, name: 'Laptop Stand', price: '$39.99', category: 'Accessories' },
    { id: 4, name: 'USB-C Cable', price: '$69.99', category: 'Accessories' },
    { id: 5, name: 'Portable Charger', price: '$44.99', category: 'Electronics' },
    { id: 6, name: 'Monitor Light', price: '$54.99', category: 'Accessories' },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">SHOP</div>
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-sm font-medium hover:text-gray-600 transition">Home</a>
            <a href="#" className="text-sm font-medium hover:text-gray-600 transition">Browse</a>
            <a href="#" className="text-sm font-medium hover:text-gray-600 transition">Sell</a>
            <a href="#" className="text-sm font-medium hover:text-gray-600 transition">Help</a>
          </nav>
          <div className="flex gap-4">
            <button className="px-4 py-2 text-sm font-medium hover:bg-gray-100 transition">Sign In</button>
            <button className="px-4 py-2 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition">Cart (0)</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">New Arrivals</h1>
            <p className="text-lg text-gray-600 mb-8">Discover the latest products in our collection</p>
            <button className="px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition">View All</button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto">
            <button className="px-4 py-2 text-sm font-medium border border-gray-300 hover:border-gray-900 transition whitespace-nowrap">All</button>
            <button className="px-4 py-2 text-sm font-medium border border-gray-300 hover:border-gray-900 transition whitespace-nowrap">Electronics</button>
            <button className="px-4 py-2 text-sm font-medium border border-gray-300 hover:border-gray-900 transition whitespace-nowrap">Accessories</button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="flex-grow py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border border-gray-200 hover:border-gray-900 transition group">
                <div className="w-full h-64 bg-gray-100 border-b border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-gray-200 transition">
                  <span className="text-sm font-medium">Product Image</span>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-2">{product.category}</p>
                  <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                  <p className="text-xl font-bold mb-4">{product.price}</p>
                  <button className="w-full px-4 py-2 border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">About SHOP</h4>
              <p className="text-sm text-gray-400">We provide quality products at competitive prices for all your needs.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Customer Service</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-gray-400 text-center">
            <p>&copy; 2026 SHOP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
