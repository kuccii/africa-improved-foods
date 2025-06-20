import { motion } from 'framer-motion';
import { Contact } from '../components/Contact';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.3, ease: "easeOut" } 
  }
};

const contactMethods = [
  {
    title: 'Email Us',
    description: 'Get in touch with our team for any inquiries.',
    icon: '✉️',
    action: 'Send Email',
    details: 'info@africaimprovedfoods.com'
  },
  {
    title: 'Call Us',
    description: 'Speak directly with our representatives.',
    icon: '📞',
    action: 'Call Now',
    details: '+250 788 123 456'
  },
  {
    title: 'Visit Us',
    description: 'Schedule a visit to our facilities.',
    icon: '🏢',
    action: 'Book Visit',
    details: 'Mon-Fri, 9:00 AM - 5:00 PM'
  }
];

const locations = [
  {
    title: 'Head Office',
    address: '123 Business Street, Kigali, Rwanda',
    phone: '+250 788 123 456',
    email: 'headoffice@africaimprovedfoods.com'
  },
  {
    title: 'Processing Facility',
    address: '456 Industrial Park, Kigali, Rwanda',
    phone: '+250 788 123 457',
    email: 'facility@africaimprovedfoods.com'
  }
];

export const ContactPage = () => {
  return (
    <div className="min-h-screen pt-16 pb-16 relative scroll-m-0 first:mt-0 bg-gradient-to-br from-green-50 to-orange-50">
      {/* Decorative elements */}
      <div className="decorative-circle w-80 h-80 -top-40 -right-40 absolute z-0 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="decorative-circle w-64 h-64 -bottom-32 left-1/4 absolute z-0 bg-green-200/20 rounded-full blur-2xl" />
      <div className="decorative-square w-48 h-48 top-1/3 -left-24 rotate-45 absolute z-0 bg-orange-200/30 rounded-full blur-3xl" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-0 mt-0"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        viewport={{ once: false, amount: 0.15 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 mt-0 pt-0 drop-shadow-lg tracking-tight text-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.15 }}
        >
          Contact Us
        </motion.h1>

        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.15 }}
          className="space-y-16"
        >
          {/* Contact Methods */}
          <motion.div variants={fadeInUp}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  variants={fadeInUp}
                  viewport={{ once: false, amount: 0.15 }}
                >
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-2">{method.description}</p>
                  <p className="text-green-600 font-medium mb-4">{method.details}</p>
                  <button className="btn-primary">{method.action}</button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeInUp}>
            <div className="glass-card p-8">
              <Contact />
            </div>
          </motion.div>

          {/* Locations */}
          <motion.div variants={fadeInUp}>
            <div className="gradient-section p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Locations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    variants={fadeInUp}
                    viewport={{ once: false, amount: 0.15 }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{location.title}</h3>
                    <div className="space-y-2">
                      <p className="text-gray-600">{location.address}</p>
                      <p className="text-gray-600">Phone: {location.phone}</p>
                      <p className="text-gray-600">Email: {location.email}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div variants={fadeInUp}>
            <div className="gradient-section p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Business Hours</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="glass-card p-6"
                  variants={fadeInUp}
                  viewport={{ once: false, amount: 0.15 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </motion.div>
                <motion.div
                  className="glass-card p-6"
                  variants={fadeInUp}
                  viewport={{ once: false, amount: 0.15 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Processing Facility</h3>
                  <p className="text-gray-600">Monday - Friday: 24/7 Operations</p>
                  <p className="text-gray-600">Saturday: 6:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
