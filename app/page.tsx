export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-blue-700 to-purple-800 text-white p-4 sticky top-0 shadow-xl z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold">🚀 Carter's Web Design</h1>
          <div className="space-x-6 text-lg font-medium">
            <a href="#services" className="hover:text-blue-200 transition">Services</a>
            <a href="#portfolio" className="hover:text-blue-200 transition">Portfolio</a>
            <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-black mb-6">
            Websites for Small Businesses. Done Right. Done Fast.
          </h2>
          <p className="text-2xl mb-10 opacity-90">
            I build fire, affordable websites that get your business noticed.
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-gray-900">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="text-6xl mb-6">💻</div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Custom Web Design</h3>
              <p className="text-lg text-gray-700">
                Fresh, modern designs that fit your brand perfectly. No templates, no boring sites.
              </p>
            </div>
            <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="text-6xl mb-6">📱</div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Mobile-Ready</h3>
              <p className="text-lg text-gray-700">
                Your site will look amazing and work flawlessly on phones, tablets, and desktops.
              </p>
            </div>
            <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">SEO Optimized</h3>
              <p className="text-lg text-gray-700">
                I build sites Google loves, helping customers find you online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-gray-900">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Starter Package */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-3xl font-bold mb-4 text-blue-600">Starter</h3>
              <p className="text-5xl font-black mb-2 text-gray-900">$10<span className="text-2xl text-gray-600">/mo</span></p>
              <p className="text-gray-600 mb-6">+ $75 setup</p>
              <ul className="text-left space-y-3 mb-8 text-gray-700">
                <li>✓ 1-page website</li>
                <li>✓ Mobile responsive</li>
                <li>✓ Contact form</li>
                <li>✓ Basic SEO</li>
                <li>✓ Free hosting</li>
              </ul>
              <a href="#contact" className="block bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                Get Started
              </a>
            </div>

            {/* Growth Package */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-xl shadow-2xl transform scale-105">
              <div className="bg-yellow-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-3xl font-bold mb-4">Growth</h3>
              <p className="text-5xl font-black mb-2">$29<span className="text-2xl opacity-80">/mo</span></p>
              <p className="opacity-80 mb-6">+ $199 setup</p>
              <ul className="text-left space-y-3 mb-8">
                <li>✓ Up to 5 pages</li>
                <li>✓ Blog setup</li>
                <li>✓ Booking system</li>
                <li>✓ Advanced SEO</li>
                <li>✓ Priority support</li>
              </ul>
              <a href="#contact" className="block bg-white text-blue-700 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                Get Started
              </a>
            </div>

            {/* Boss Package */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-3xl font-bold mb-4 text-purple-600">Boss</h3>
              <p className="text-5xl font-black mb-2 text-gray-900">$59<span className="text-2xl text-gray-600">/mo</span></p>
              <p className="text-gray-600 mb-6">+ $499 setup</p>
              <ul className="text-left space-y-3 mb-8 text-gray-700">
                <li>✓ Unlimited pages</li>
                <li>✓ E-commerce ready</li>
                <li>✓ Email marketing</li>
                <li>✓ Local SEO package</li>
                <li>✓ Monthly updates</li>
              </ul>
              <a href="#contact" className="block bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-gray-900">My Work</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Placeholder projects */}
            {[1, 2, 3].map((num) => (
              <div key={num} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-xl flex items-center justify-center text-white text-xl font-semibold">
                  Project #{num}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Client Name</h3>
                  <p className="text-gray-700 mb-4">Professional website for local business</p>
                  <a href="#contact" className="text-blue-600 hover:underline font-semibold">View Details →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 text-gray-900">Let's Work Together</h2>
          <p className="text-xl text-gray-700 mb-10">
            Ready to get a fire website? Fill out the form and I'll get back to you within 24 hours.
          </p>
          <form className="space-y-6 max-w-lg mx-auto">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              required
            />
            <input 
              type="text" 
              placeholder="Business Name" 
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              required
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              required
            />
            <textarea 
              placeholder="Tell me about your project..." 
              rows={5}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              required
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-xl shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
            >
              Send My Request
            </button>
          </form>
          <p className="mt-8 text-lg text-gray-600">
            📞 Text me: (417) 355-5129<br/>
            ✉️ Email: carter@carterschmeling.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg">&copy; 2025 Carter's Web Design. Built with Next.js & Tailwind CSS.</p>
          <p className="mt-2 text-gray-400">Helping small businesses win online 🚀</p>
        </div>
      </footer>
    </div>
  );
}
