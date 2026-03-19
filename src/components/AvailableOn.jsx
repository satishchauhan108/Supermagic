const AvailableOn = () => {
  const platforms = [
    { name: 'Amazon', icon: '🛒', color: 'from-orange-500 to-orange-600' },
    { name: 'Blinkit', icon: '⚡', color: 'from-yellow-400 to-yellow-500' },
    { name: 'Swiggy Instamart', icon: '🛍️', color: 'from-red-500 to-red-600' }
  ];

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 lg:px-8">
        <h2 className="text-xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-gray-900">
          Available On
        </h2>
        <div className="flex flex-row md:grid md:grid-cols-3 justify-center gap-4 md:gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 md:p-8 text-center hover:shadow-xl transition-all duration-300 flex-shrink-0 w-24 md:w-auto"
            >
              <div className={`w-12 h-12 md:w-20 md:h-20 mx-auto mb-2 md:mb-4 rounded-full bg-gradient-to-br ${platform.color} flex items-center justify-center text-2xl md:text-4xl`}>
                {platform.icon}
              </div>
              <h3 className="text-xs md:text-2xl font-semibold text-gray-900">
                {platform.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableOn;
