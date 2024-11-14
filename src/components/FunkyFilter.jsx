import { useState } from 'react';

export function FunkyFilter({ onFilterChange }) {
  const [activeFilters, setActiveFilters] = useState(new Set(['all']));

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'veg', label: 'Pure Veg' },
    { id: 'delivery', label: 'Fast Delivery' },
    { id: 'rating', label: 'Rating 4.0+' },
    { id: 'offers', label: 'Great Offers' },
    { id: 'price', label: 'Less than ₹300' }
  ];

  const handleFilterClick = (filterId) => {
    const newFilters = new Set(activeFilters);
    if (filterId === 'all') {
      setActiveFilters(new Set(['all']));
    } else {
      newFilters.delete('all');
      if (newFilters.has(filterId)) {
        newFilters.delete(filterId);
        if (newFilters.size === 0) newFilters.add('all');
      } else {
        newFilters.add(filterId);
      }
      setActiveFilters(newFilters);
    }
    onFilterChange(Array.from(newFilters));
  };

  return (
    <div className="bg-white shadow-sm mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4 overflow-x-auto py-4">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => handleFilterClick(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                ${activeFilters.has(filter.id)
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}