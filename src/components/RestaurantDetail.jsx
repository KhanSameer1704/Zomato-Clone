import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { restaurants } from '../data/restaurants';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function RestaurantDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddedMessage, setShowAddedMessage] = useState(null);
  
  const restaurant = restaurants.find(r => r.id === parseInt(id));
  
  if (!restaurant) {
    return <div className="text-center py-10">Restaurant not found</div>;
  }

  const categories = ['all', ...new Set(restaurant.menu.map(item => item.category))];
  const filteredMenu = selectedCategory === 'all' 
    ? restaurant.menu 
    : restaurant.menu.filter(item => item.category === selectedCategory);

  const handleAddItem = (item) => {
    addItem({ ...item, restaurantId: restaurant.id });
    setShowAddedMessage(item.id);
    setTimeout(() => setShowAddedMessage(null), 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{restaurant.name}</h1>
            <p className="text-gray-600 mt-1">{restaurant.cuisine}</p>
            <div className="mt-2 flex items-center space-x-4">
              <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                ★ {restaurant.rating}
              </span>
              <span className="text-gray-600">{restaurant.deliveryTime} mins</span>
              <span className="text-gray-600">{restaurant.priceRange}</span>
            </div>
          </div>
          <div className="text-right">
            {restaurant.offers.map((offer, index) => (
              <div key={index} className="text-red-500 text-sm mb-1">
                {offer}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6 flex gap-2 overflow-x-auto">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                ${selectedCategory === category
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredMenu.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b pb-4 last:border-b-0">
              <div className="flex-1">
                <div className="flex items-center">
                  <span className={`w-3 h-3 rounded-full ${item.veg ? 'bg-green-500' : 'bg-red-500'} mr-2`}></span>
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                </div>
                <p className="text-gray-600">₹{item.price}</p>
              </div>
              <div className="relative">
                <button
                  onClick={() => handleAddItem(item)}
                  className="px-4 py-2 bg-white border border-red-500 text-red-500 rounded hover:bg-red-50 transition-colors"
                >
                  Add to Cart
                </button>
                {showAddedMessage === item.id && (
                  <div className="absolute top-0 right-0 flex items-center bg-green-100 text-green-800 px-3 py-1 rounded">
                    <CheckCircleIcon className="h-4 w-4 mr-1" />
                    Added
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}