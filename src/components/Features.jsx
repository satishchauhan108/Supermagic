const Features = () => {
  const features = [
    { icon: '🚀', title: 'Fast Delivery', description: 'Quick and reliable delivery to your doorstep' },
    { icon: '👶', title: 'Safe for Kids', description: 'Non-toxic and gentle for your little ones' },
    { icon: '🌱', title: 'Biodegradable', description: 'Eco-friendly and planet-conscious' },
    { icon: '🐾', title: 'Pet Safe', description: 'Safe for your furry family members' }
  ];

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-3 lg:px-8">
        <h2 className="text-xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-gray-900">
          Why Choose Supermagic?
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-eco-green-50 to-eco-green-100 rounded-xl p-4 md:p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl md:text-6xl mb-2 md:mb-4">{feature.icon}</div>
              <h3 className="text-sm md:text-2xl font-semibold text-gray-900 mb-1 md:mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
