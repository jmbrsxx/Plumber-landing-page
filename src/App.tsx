import { useState } from 'react'
import './App.css'
import {
  Menu,
  X,
  Phone,
  Clock,
  CheckCircle,
  Zap,
  Droplet,
  Thermometer,
  Wrench,
  Home,
  Building2,
  Star,
  ChevronDown,
  ChevronUp,
  MapPin,
  Mail,
  Send,
} from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setContactForm(prev => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', contactForm)
    alert('Thank you for reaching out! We\'ll contact you shortly.')
    setContactForm({ name: '', phone: '', email: '', service: '', message: '' })
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="w-full bg-slate-950 text-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Wrench className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold">KEVVA</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition">Home</a>
              <a href="#services" className="hover:text-blue-400 transition">Services</a>
              <a href="#how-it-works" className="hover:text-blue-400 transition">How It Works</a>
              <a href="#testimonials" className="hover:text-blue-400 transition">Testimonials</a>
              <a href="#faq" className="hover:text-blue-400 transition">FAQ</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#home" className="block py-2 hover:text-blue-400">Home</a>
              <a href="#services" className="block py-2 hover:text-blue-400">Services</a>
              <a href="#how-it-works" className="block py-2 hover:text-blue-400">How It Works</a>
              <a href="#testimonials" className="block py-2 hover:text-blue-400">Testimonials</a>
              <a href="#faq" className="block py-2 hover:text-blue-400">FAQ</a>
              <a href="#contact" className="block py-2 hover:text-blue-400">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-slate-950 opacity-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;opacity=0.05')] bg-center bg-repeat" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span className="bg-blue-950 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold">
              Professional Plumbing Services
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Fast, Reliable Plumbing
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              You Can Count On
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Emergency plumbing, repairs, and installations available 24/7. Trusted by homeowners and businesses across the region.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#contact">
              <button className="btn-primary w-full sm:w-auto flex items-center justify-center space-x-2">
                <span>Book a Service</span>
                <Phone className="w-5 h-5" />
              </button>
            </a>
            <a href="#contact">
              <button className="btn-secondary w-full sm:w-auto">
                Request a Quote
              </button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 pt-12 border-t border-slate-800">
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-6 h-6 text-blue-400" />
              <span className="text-sm">Same-Day Service</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-6 h-6 text-blue-400" />
              <span className="text-sm">24/7 Emergency</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-blue-400" />
              <span className="text-sm">Guaranteed Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive plumbing solutions for residential and commercial properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: '24/7 Emergency Plumbing',
                description: 'Immediate response to plumbing emergencies anytime, day or night'
              },
              {
                icon: <Droplet className="w-8 h-8" />,
                title: 'Blocked Drains',
                description: 'Fast, effective drain clearing using modern equipment'
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: 'Leak Detection',
                description: 'Advanced leak detection to find hidden water leaks quickly'
              },
              {
                icon: <Thermometer className="w-8 h-8" />,
                title: 'Hot Water Systems',
                description: 'Repairs, maintenance, and installation of hot water systems'
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: 'Pipe Repairs & Installation',
                description: 'Expert pipe repair and new pipe installation services'
              },
              {
                icon: <Home className="w-8 h-8" />,
                title: 'Bathroom & Kitchen',
                description: 'Plumbing for renovations, installations, and upgrades'
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-slate-800 border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition group"
              >
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-slate-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-slate-400 text-lg">Simple, straightforward process from start to finish</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Request a Quote',
                description: 'Contact us by phone, email, or form. We\'ll discuss your plumbing needs and provide a free quote.'
              },
              {
                step: 2,
                title: 'We Assess',
                description: 'Our expert plumbers arrive promptly to inspect your issue and confirm the solution.'
              },
              {
                step: 3,
                title: 'We Fix It Right',
                description: 'We complete the work professionally with minimal disruption. Guaranteed quality service.'
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400">{item.description}</p>
                  </div>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute right-0 top-6 translate-x-1/2 text-slate-600">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Who We Serve</h2>
            <p className="text-slate-400 text-lg">Residential and commercial plumbing expertise</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 justify-items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <Home className="w-6 h-6 text-blue-400" />
                <span>Residential</span>
              </h3>
              <ul className="space-y-3">
                {['Homeowners', 'Property Managers', 'Real Estate Agencies'].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <Building2 className="w-6 h-6 text-blue-400" />
                <span>Commercial</span>
              </h3>
              <ul className="space-y-3">
                {['Restaurants & Cafes', 'Retail Stores', 'Office Buildings'].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-slate-400 text-lg">Trusted by hundreds of satisfied clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah Mitchell',
                role: 'Homeowner',
                review: 'Excellent service! They responded to my emergency call at 2 AM and fixed the burst pipe immediately. Professional and courteous.',
                rating: 5
              },
              {
                name: 'James Chen',
                role: 'Restaurant Owner',
                review: 'We use Kevva for all our commercial plumbing. Reliable, prompt, and they understand the demands of running a business.',
                rating: 5
              },
              {
                name: 'Amanda Torres',
                role: 'Property Manager',
                review: 'Managing multiple properties is easier knowing I have a trusted plumber. Fast service, fair pricing, and always professional.',
                rating: 5
              },
              {
                name: 'David Wong',
                role: 'Homeowner',
                review: 'Fixed a hidden leak in my walls. The advanced detection equipment saved me thousands in potential water damage. Highly recommended!',
                rating: 5
              },
              {
                name: 'Lisa Anderson',
                role: 'Office Manager',
                review: 'Called for our kitchen renovation plumbing. They coordinated perfectly with our contractors and delivered exactly what we needed.',
                rating: 5
              },
              {
                name: 'Marcus Rodriguez',
                role: 'Homeowner',
                review: 'Hot water system installation was smooth and efficient. Great communication from initial quote to completion. 5 stars!',
                rating: 5
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 italic">"{testimonial.review}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400 text-lg">Common questions about our services</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What is your response time for emergency calls?',
                a: 'We aim to respond to emergency calls within 30-45 minutes in most areas. Call us immediately at any time - day or night.'
              },
              {
                q: 'Do you offer 24/7 emergency plumbing?',
                a: 'Yes! Our emergency plumbing service is available 24 hours a day, 7 days a week, including weekends and holidays.'
              },
              {
                q: 'How is your pricing structured?',
                a: 'We offer transparent, upfront pricing with a service call fee that can be credited toward the final bill. No hidden charges.'
              },
              {
                q: 'What warranty do you provide?',
                a: 'All our work comes with a 12-month workmanship warranty. Parts are warranted according to manufacturer specifications.'
              },
              {
                q: 'What areas do you service?',
                a: 'We service the greater region with same-day availability. Contact us to confirm service for your specific location.'
              },
              {
                q: 'Do you handle commercial plumbing?',
                a: 'Absolutely! We specialize in both residential and commercial plumbing, with experience managing complex business requirements.'
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700 transition"
                >
                  <h3 className="font-semibold text-left">{item.q}</h3>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 py-4 bg-slate-700 border-t border-slate-600">
                    <p className="text-slate-300">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-slate-400 text-lg">Request a quote or book your service today</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <a href="tel:0412345678" className="flex items-start space-x-4 group">
                    <Phone className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold group-hover:text-blue-400 transition">Phone</p>
                      <p className="text-slate-400">(04) 1234 5678</p>
                      <p className="text-slate-500 text-sm">24/7 Emergency Line</p>
                    </div>
                  </a>

                  <a href="mailto:info@kevva.store" className="flex items-start space-x-4 group">
                    <Mail className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold group-hover:text-blue-400 transition">Email</p>
                      <p className="text-slate-400">info@kevva.store</p>
                      <p className="text-slate-500 text-sm">Response within 1 hour</p>
                    </div>
                  </a>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Service Area</p>
                      <p className="text-slate-400">Greater Region</p>
                      <p className="text-slate-500 text-sm">Same-day service available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-950 border border-blue-800 rounded-lg p-6">
                <p className="text-sm text-blue-200">
                  For emergencies, call us anytime. Our team is standing by to help.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleContactSubmit} className="bg-slate-800 border border-slate-700 rounded-lg p-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-slate-50 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleContactChange}
                    required
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-slate-50 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
                    placeholder="(04) 1234 5678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-slate-50 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Service Type</label>
                  <select
                    name="service"
                    value={contactForm.service}
                    onChange={handleContactChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-slate-50 focus:outline-none focus:border-blue-500 transition"
                  >
                    <option value="">Select a service</option>
                    <option value="emergency">Emergency Plumbing</option>
                    <option value="blocked-drains">Blocked Drains</option>
                    <option value="leak-detection">Leak Detection</option>
                    <option value="hot-water">Hot Water Systems</option>
                    <option value="pipe-repairs">Pipe Repairs</option>
                    <option value="renovations">Renovations & Installation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    rows={4}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-slate-50 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition resize-none"
                    placeholder="Tell us about your plumbing issue..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Wrench className="w-6 h-6 text-blue-500" />
                <span className="font-bold">KEVVA</span>
              </div>
              <p className="text-slate-400 text-sm">Professional plumbing services you can trust.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
                <li><a href="#how-it-works" className="hover:text-blue-400 transition">How It Works</a></li>
                <li><a href="#faq" className="hover:text-blue-400 transition">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="tel:0412345678" className="hover:text-blue-400 transition">(04) 1234 5678</a></li>
                <li><a href="mailto:info@kevva.store" className="hover:text-blue-400 transition">info@kevva.store</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Service Hours</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>24/7 Emergency</li>
                <li>Same-day available</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 Kevva Plumbing. All rights reserved. | kevva.store</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

