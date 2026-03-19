import { categories } from '../data/products';

const Categories = () => {
  return (
    <section className="py-6 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-3 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-12 text-gray-900">
          Shop by Category
        </h2>
        {/* Mobile: Horizontal Scroll */}
        <div className="lg:hidden overflow-x-auto pb-4 -mx-3 px-3 hide-scrollbar">
          <div className="flex gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer flex flex-col items-center flex-shrink-0"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-eco-green-100 to-eco-green-200 flex items-center justify-center text-4xl transition-all duration-300 group-active:scale-110 group-active:shadow-lg mb-2">
                  {category.icon}
                </div>
                <h3 className="text-xs font-medium text-gray-700 text-center group-active:text-eco-green-600 transition-colors w-20">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
        {/* Desktop: Grid */}
        <div className="hidden lg:grid grid-cols-7 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer flex flex-col items-center"
            >
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-eco-green-100 to-eco-green-200 flex items-center justify-center text-5xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:from-eco-green-200 group-hover:to-eco-green-300 mb-3">
                {category.icon}
              </div>
              <h3 className="text-base font-medium text-gray-700 text-center group-hover:text-eco-green-600 transition-colors">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
