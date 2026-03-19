import { useState } from 'react';

const Banner = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="py-8 md:py-16 bg-gradient-to-r from-eco-green-500 to-eco-green-600 text-white">
      <div className="max-w-7xl mx-auto px-3 lg:px-8 text-center">
        <h2 className="text-xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6">
          Not just clean, It's Supermagic Clean
        </h2>
        <p className="text-sm md:text-xl mb-4 md:mb-8 text-eco-green-50">
          Subscribe to our newsletter for exclusive offers and cleaning tips
        </p>
        
        {subscribed ? (
          <div className="max-w-md mx-auto p-4 bg-white/20 rounded-lg">
            <p className="font-semibold text-sm md:text-base">✓ Thank you for subscribing!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none text-sm md:text-base"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-white text-eco-green-600 rounded-lg font-semibold hover:bg-eco-green-50 active:bg-eco-green-100 transition-colors text-sm md:text-base"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Banner;
