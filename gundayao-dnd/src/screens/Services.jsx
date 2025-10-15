import Footer from '../components/footer'

function Services() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Make It Your Own, With Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            designed to simplify ownership transfers, protect your assets, and give you
            peace of mind—fast, accurate, and hassle-free.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="mt-24 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Clients Statistics */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-6">
                <svg className="w-full h-full text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">100,000 +</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Clients Across The Nation</div>
              <div className="text-gray-600 text-sm max-w-xs">
                We've helped thousands of Filipinos secure their homes, vehicles, and assets with confidence.
              </div>
            </div>

            {/* Service Rating */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-6">
                <svg className="w-full h-full text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">9/10</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Service Evaluation by LIGAL</div>
              <div className="text-gray-600 text-sm max-w-xs">
                Our processes are reviewed and approved by seasoned legal professionals to ensure full compliance.
              </div>
            </div>

            {/* Legal Experts */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-6">
                <svg className="w-full h-full text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 8h-5A1.5 1.5 0 0 0 12.04 8.37L9.5 16H12v6h8zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-6H10l-2.54-7.63A1.5 1.5 0 0 0 6 8H1.5A1.5 1.5 0 0 0 .04 8.37L-2.5 16H0v6h7.5z"/>
                </svg>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">100+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Legal Experts and Officers</div>
              <div className="text-gray-600 text-sm max-w-xs">
                A trusted team of liaison officers, paralegals, and legal consultants at your service.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services