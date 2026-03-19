import { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Filters from './components/Filters';
import ProductCard from './components/ProductCard';
import ContactModal from './components/ContactModal';
import Pagination from './components/Pagination';
import Banner from './components/Banner';
import AvailableOn from './components/AvailableOn';
import Features from './components/Features';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import MobileDrawer from './components/MobileDrawer';
import { products } from './data/products';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState('');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [activeBottomTab, setActiveBottomTab] = useState('home');
  const productsPerPage = 8;

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = selectedCategory
      ? products.filter((p) => p.category === selectedCategory)
      : products;

    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        filtered = [...filtered].sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredAndSortedProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, sortBy]);

  const handleBuyNow = (productName) => {
    setSelectedProductName(productName);
    setIsContactModalOpen(true);
  };

  const handleShopNow = () => {
    document.getElementById('best-sellers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero onShopNow={handleShopNow} />
      <Categories />
      
      {/* Best Sellers Section */}
      <section id="best-sellers" className="py-6 md:py-16 bg-gray-50 pb-20 md:pb-16">
        <div className="max-w-7xl mx-auto px-3 lg:px-8">
          <div className="flex items-center justify-between mb-4 md:mb-12">
            <h2 className="text-xl md:text-4xl font-bold text-gray-900">
              Best Sellers
            </h2>
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterDrawerOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md text-sm font-medium text-gray-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
            </button>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Filters Sidebar - Desktop Only */}
            <div className="hidden lg:block lg:w-64 flex-shrink-0">
              <Filters
                selectedCategory={selectedCategory}
                onCategoryChange={(category) => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                sortBy={sortBy}
                onSortChange={(sort) => {
                  setSortBy(sort);
                  setCurrentPage(1);
                }}
              />
            </div>

            {/* Products Grid - 2 columns on mobile */}
            <div className="flex-1">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onBuyNow={handleBuyNow}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}

              {/* No products message */}
              {paginatedProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Banner />
      <AvailableOn />
      <Features />
      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        productName={selectedProductName}
      />

      {/* Mobile Filter Drawer */}
      <MobileDrawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
        title="Filters"
      >
        <Filters
          selectedCategory={selectedCategory}
          onCategoryChange={(category) => {
            setSelectedCategory(category);
            setCurrentPage(1);
            setIsFilterDrawerOpen(false);
          }}
          sortBy={sortBy}
          onSortChange={(sort) => {
            setSortBy(sort);
            setCurrentPage(1);
          }}
        />
      </MobileDrawer>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav
        activeTab={activeBottomTab}
        onTabChange={setActiveBottomTab}
      />
    </div>
  );
}

export default App;
