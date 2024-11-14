import { useCart } from '../context/CartContext';
import { XMarkIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Cart() {
  const { items, removeItem, updateQuantity, cartTotal, clearCart } = useCart();
  const [isMinimized, setIsMinimized] = useState(false);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className={`fixed bottom-0 right-0 m-4 bg-white rounded-lg shadow-lg transition-all duration-300 ${
      isMinimized ? 'w-48' : 'w-96'
    }`}>
      <div className="p-4 border-b flex justify-between items-center bg-red-500 text-white rounded-t-lg">
        <h3 className="text-lg font-semibold">Your Cart ({items.length})</h3>
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="text-white hover:text-gray-200"
        >
          {isMinimized ? 'Show' : 'Hide'}
        </button>
      </div>

      <div className={`${isMinimized ? 'hidden' : 'block'}`}>
        <div className="max-h-96 overflow-y-auto p-4">
          {items.map((item) => (
            <div key={`${item.restaurantId}-${item.id}`} className="flex justify-between items-center mb-4 last:mb-0">
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">₹{item.price * item.quantity}</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => updateQuantity(item, Math.max(0, item.quantity - 1))}
                    className="p-1 hover:bg-gray-100"
                  >
                    <MinusIcon className="h-4 w-4" />
                  </button>
                  <span className="px-3 py-1">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item, item.quantity + 1)}
                    className="p-1 hover:bg-gray-100"
                  >
                    <PlusIcon className="h-4 w-4" />
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item)}
                  className="text-red-500 hover:text-red-600"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t p-4">
          <div className="flex justify-between font-semibold mb-4">
            <span>Total Amount:</span>
            <span>₹{cartTotal}</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={clearCart}
              className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded border"
            >
              Clear Cart
            </button>
            <button
              className="flex-1 px-4 py-2 bg-green-500 text-white rounded text-sm font-medium hover:bg-green-600"
            >
              Place Order • ₹{cartTotal}
            </button>
          </div>
        </div>
      </div>

      {isMinimized && (
        <div className="p-4 flex justify-between items-center">
          <span className="font-medium">₹{cartTotal}</span>
          <button
            className="px-3 py-1 bg-green-500 text-white rounded text-sm"
          >
            Order
          </button>
        </div>
      )}
    </div>
  );
}