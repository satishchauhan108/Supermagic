import { categories } from '../data/products';

const Filters = ({ selectedCategory, onCategoryChange, sortBy, onSortChange }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Filters</h3>
      
      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Category</h4>
        <div className="space-y-2">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="category"
              value=""
              checked={selectedCategory === ''}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="mr-2 text-eco-green-500"
            />
            <span className="text-sm text-gray-700">All Products</span>
          </label>
          {categories.map((cat, index) => (
            <label key={index} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="category"
                value={cat.name}
                checked={selectedCategory === cat.name}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="mr-2 text-eco-green-500"
              />
              <span className="text-sm text-gray-700">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sort Filter */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Sort By</h4>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-green-500 focus:border-transparent"
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="reviews">Most Reviews</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
