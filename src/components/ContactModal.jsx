import { useState, useEffect } from 'react';

const ContactModal = ({ isOpen, onClose, productName = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    productName: productName,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      productName: productName
    }));
  }, [productName]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', productName: productName, message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const phone = '+91 8839912482';
  const whatsapp = '+918839912482';
  const email = 'sales@supermagicenterprises.com';
  const address = 'Pithampur, Dhar,Madhya Pradesh India';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Contact Us to Order
            </h2>
            <p className="text-gray-600">Get in touch to place your order</p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 gap-3 mb-6">
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-3 p-4 bg-eco-green-50 rounded-xl hover:bg-eco-green-100 transition-colors border border-eco-green-200"
            >
              <div className="w-12 h-12 bg-eco-green-500 rounded-full flex items-center justify-center text-white text-xl">
                📞
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-semibold text-gray-900">{phone}</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors border border-green-200"
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
                💬
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">WhatsApp</p>
                <p className="font-semibold text-gray-900">{phone}</p>
              </div>
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors border border-blue-200"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                ✉️
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-semibold text-gray-900 text-sm">{email}</p>
              </div>
            </a>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white text-xl">
                📍
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Address</p>
                <p className="font-semibold text-gray-900">{address}</p>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <a
              href={`tel:${phone}`}
              className="flex flex-col items-center gap-2 p-3 bg-eco-green-500 text-white rounded-xl hover:bg-eco-green-600 transition-colors"
            >
              <span className="text-2xl">📞</span>
              <span className="text-xs font-semibold">Call Now</span>
            </a>
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
            >
              <span className="text-2xl">💬</span>
              <span className="text-xs font-semibold">WhatsApp</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="flex flex-col items-center gap-2 p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
            >
              <span className="text-2xl">✉️</span>
              <span className="text-xs font-semibold">Email</span>
            </a>
          </div>

          {/* Inquiry Form */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Send Inquiry</h3>
            {submitted ? (
              <div className="p-4 bg-eco-green-50 border border-eco-green-200 rounded-xl text-center">
                <p className="text-eco-green-700 font-semibold">✓ Inquiry submitted successfully!</p>
                <p className="text-sm text-eco-green-600 mt-1">We'll contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green-500 focus:border-transparent bg-gray-50"
                    placeholder="Product name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green-500 focus:border-transparent"
                    placeholder="Your message or inquiry"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-eco-green-500 text-white py-3 rounded-lg font-semibold hover:bg-eco-green-600 transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
