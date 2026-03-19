const Hero = ({ onShopNow }) => {
  return (
    <section className="relative bg-gradient-to-br from-eco-green-500 via-eco-green-600 to-eco-green-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-3 lg:px-8 py-12 md:py-32">
        <div className="text-center">
          <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
            Protect Your Loved Ones
          </h1>
          <p className="text-sm md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto text-eco-green-50 px-2">
            Eco-friendly cleaning products that keep your home safe, clean, and healthy. 
            Made with natural ingredients, safe for your family and the environment.
          </p>
          <button
            onClick={onShopNow}
            className="bg-white text-eco-green-600 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-eco-green-50 active:bg-eco-green-100 transition-all shadow-lg"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default Hero;
