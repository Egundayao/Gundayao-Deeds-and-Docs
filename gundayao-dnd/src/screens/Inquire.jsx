import { useState } from 'react'
import Footer from '../components/footer'

function Inquire() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    location: '',
    serviceType: [],
    message: '',
    agreeToPolicy: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      serviceType: prev.serviceType.includes(service)
        ? prev.serviceType.filter(s => s !== service)
        : [...prev.serviceType, service]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you soon.')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Section - Image and Form Side by Side */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Hero Image - Hidden on Mobile */}
          <div className="hidden lg:flex justify-center items-center">
            <div 
              className="w-full max-w-2xl h-[750px] rounded-3xl shadow-2xl bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1627514818551-db74fc995e9b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=812')`
              }}
            />
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="flex justify-center items-center pt-12 lg:pt-12">
            <div className="w-full max-w-lg">
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Get in contact with the expert that is perfect for your concerns.
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                    className="w-full px-4 py-3 border-2 border-gray-800 bg-gray-800/5 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    className="w-full px-4 py-3 border-2 border-gray-800 bg-gray-800/5 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Ex: GundayaoDnD@gmail.com"
                  className="w-full px-4 py-3 border-2 border-gray-800 bg-gray-800/5 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-all"
                  required
                />
              </div>

              {/* Mobile and Location */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="+63 000 000 0000"
                    className="w-full px-4 py-3 border-2 border-gray-800 bg-gray-800/5 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="ex. Makati City, NCR"
                    className="w-full px-4 py-3 border-2 border-gray-800 bg-gray-800/5 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Type of Service */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Type of Service</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    'Property Title Transfer',
                    'Vehicle Ownership Transfer', 
                    'Asset Ownership Transfer',
                    'Legal Consultation',
                    'Others'
                  ].map((service) => (
                    <label key={service} className="flex items-start space-x-2 cursor-pointer group col-span-1">
                      <input
                        type="checkbox"
                        checked={formData.serviceType.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="w-4 h-4 mt-1 rounded border-2 border-gray-800 bg-gray-800/5 text-gray-900 focus:ring-gray-800 focus:ring-2"
                      />
                      <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors leading-tight">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message us!</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter message here..."
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-800 bg-gray-800/5 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gray-800 focus:border-gray-800 transition-all resize-none"
                  required
                />
              </div>

              {/* Privacy Policy */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeToPolicy"
                  checked={formData.agreeToPolicy}
                  onChange={handleInputChange}
                  className="w-4 h-4 mt-1 rounded border-2 border-gray-800 bg-gray-800/5 text-gray-900 focus:ring-gray-800 focus:ring-2"
                  required
                />
                <span className="text-sm text-gray-600">
                  You agree to our{' '}
                  <a 
                    href="/privacy-policy" 
                    className="text-sm text-gray-800 underline hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    privacy policy
                  </a>
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg text-base font-semibold hover:bg-gray-800 transition-all duration-200 shadow-lg"
              >
                Send Details
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Office Information and Map Side by Side */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left Side - Office Information */}
          <div className="flex justify-center">
            <div className="w-full max-w-xl">
              <div 
                className="rounded-3xl p-8 lg:p-12 shadow-2xl"
                style={{ backgroundColor: '#1E1D1D' }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-8">
                  Consult us in person by visiting our office!
                </h2>
                
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="font-semibold text-xl text-gray-100 mb-3">Unit 804 Westpoint Tower</h3>
                    <p className="text-base leading-relaxed">
                      Makati Avenue<br />
                      Brgy. Bel-Air<br />
                      Makati City<br />
                      Metro Manila<br />
                      1209, Philippines
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Office Hours Panel */}
              <div 
                className="rounded-3xl p-6 lg:p-8 shadow-2xl mt-6"
                style={{ backgroundColor: '#1E1D1D' }}
              >
                <p className="text-base lg:text-lg text-gray-100 text-center font-medium">
                  We are only open from 8am to 5pm
                </p>
                <p className="text-base lg:text-lg text-gray-100 text-center font-medium">
                  Monday to Friday
                </p>
                <p className="text-base lg:text-lg text-gray-100 text-center font-medium">
                  Visit us!
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Map */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div 
                className="rounded-3xl p-6 shadow-2xl"
                style={{ backgroundColor: '#1E1D1D' }}
              >
                <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.2486361937244!2d121.01375747595976!3d14.563614985875824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90312c929e7%3A0x8364f85b2dc4b0e5!2sWestpoint%20Tower!5e0!3m2!1sen!2sph!4v1697459200000!5m2!1sen!2sph&markers=color:red%7Clabel:G%7C14.563615,121.015830"
                    width="100%"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Gundayao Deeds & Docs Office Location"
                    className="w-full"
                  />
                </div>
                
                {/* Address Footer */}
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-300">
                    @TDM, Unit 804, Westpoint Tower, Makati Avenue, Brgy. Bel-Air, Makati City, Metro Manila, 1209 Philippines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Inquire