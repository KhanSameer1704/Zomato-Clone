import { useState, useEffect } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import { restaurants } from '../data/restaurants';
import { FunkyFilter } from '../components/FunkyFilter';

export default function HomePage({ searchQuery }) {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [activeFilters, setActiveFilters] = useState(['all']);

  useEffect(() => {
    let filtered = restaurants;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filters
    if (!activeFilters.includes('all')) {
      filtered = filtered.filter(restaurant => {
        return activeFilters.some(filter => {
          switch (filter) {
            case 'veg':
              return restaurant.isVegetarian;
            case 'delivery':
              return restaurant.deliveryTime <= 30;
            case 'rating':
              return restaurant.rating >= 4.0;
            case 'offers':
              return restaurant.offers.length > 0;
            case 'price':
              return parseInt(restaurant.priceRange.match(/\d+/)[0]) < 300;
            default:
              return true;
          }
        });
      });
    }

    setFilteredRestaurants(filtered);
  }, [searchQuery, activeFilters]);

  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <FunkyFilter onFilterChange={setActiveFilters} />
      <div className="px-4 py-6 sm:px-0">
        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-10">
            <h2 className="text-xl text-gray-600">
              No restaurants found {searchQuery ? `matching "${searchQuery}"` : 'with selected filters'}
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}