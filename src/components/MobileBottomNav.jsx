import { useState } from 'react';

const MobileBottomNav = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'categories', label: 'Categories', icon: '📂' },
    { id: 'account', label: 'Account', icon: '👤' },
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'kcash', label: 'KCash', icon: '💰' },
    { id: 'cart', label: 'Cart', icon: '🛒' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 lg:hidden">
      <div className="flex items-center justify-around h-16 relative">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors relative ${
              activeTab === tab.id
                ? 'text-eco-green-600'
                : 'text-gray-500'
            }`}
          >
            <span className="text-xl mb-1">{tab.icon}</span>
            <span className="text-xs font-medium">{tab.label}</span>
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-eco-green-600"></div>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
