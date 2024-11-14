import { Link } from 'react-router-dom';

export default function RestaurantCard({ restaurant }) {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{restaurant.name}</h3>
          <p className="text-gray-600">{restaurant.cuisine}</p>
          <div className="mt-2 flex items-center">
            <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
              ★ {restaurant.rating}
            </span>
            <span className="ml-2 text-gray-600">•</span>
            <span className="ml-2 text-gray-600">{restaurant.deliveryTime} mins</span>
          </div>
          <p className="mt-2 text-gray-600">{restaurant.priceRange}</p>
          {restaurant.offers && restaurant.offers.length > 0 && (
            <div className="mt-2">
              <p className="text-red-500 text-sm">{restaurant.offers[0]}</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}