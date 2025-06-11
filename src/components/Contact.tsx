import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-6">Contact Us</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get in touch with our team to learn more about our products, partnerships, or career opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold gradient-text mb-6">Send us a Message</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-green-700">Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/20"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/20"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/20"
                >
                  <option value="">Select a subject</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="products">Product Information</option>
                  <option value="careers">Career Opportunities</option>
                  <option value="media">Media Inquiries</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none bg-white/20"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-6">Get in Touch</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                We're here to answer your questions and discuss how we can work together 
                to build a better future for Africa through improved nutrition and sustainable agriculture.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="glass-card p-4 flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold gradient-text mb-1">Email Us</h4>
                  <p className="text-gray-700">info@africaimprovedfoods.com</p>
                </div>
              </div>

              <div className="glass-card p-4 flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold gradient-text mb-1">Visit Us</h4>
                  <p className="text-gray-700">
                    Africa Improved Foods Rwanda Limited<br />
                    P.O Box 766, Kigali, Rwanda<br />
                    Kigali Special Economic Zone, Agri-Park<br />
                    Silos Site, Plots No: E3 F2<br />
                    Kigali, Rwanda
                  </p>
                </div>
              </div>

              <div className="glass-card p-4 flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold gradient-text mb-1">Call Us</h4>
                  <p className="text-gray-700">+250 123 456 789</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="glass-card p-6 mt-8">
              <h4 className="font-semibold gradient-text mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-green-600 hover:text-green-700 transition-colors duration-300">
                  FAQs
                </a>
                <a href="#" className="block text-green-600 hover:text-green-700 transition-colors duration-300">
                  Careers
                </a>
                <a href="#" className="block text-green-600 hover:text-green-700 transition-colors duration-300">
                  Suppliers
                </a>
                <a href="#" className="block text-green-600 hover:text-green-700 transition-colors duration-300">
                  Tender Opportunities
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};