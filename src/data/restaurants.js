export const restaurants = [
  {
    id: 1,
    name: "Spice Garden",
    cuisine: "Indian, Chinese",
    rating: 4.2,
    deliveryTime: 30,
    priceRange: "₹200 for one",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isVegetarian: false,
    menu: [
      { id: 1, name: "Butter Chicken", price: 320, category: "Main Course", veg: false },
      { id: 2, name: "Paneer Tikka", price: 280, category: "Starters", veg: true },
      { id: 3, name: "Veg Biryani", price: 250, category: "Rice", veg: true },
      { id: 4, name: "Chicken Manchurian", price: 290, category: "Chinese", veg: false }
    ],
    offers: ["50% off up to ₹100", "Free delivery"]
  },
  {
    id: 2,
    name: "Pizza Paradise",
    cuisine: "Italian, Fast Food",
    rating: 4.5,
    deliveryTime: 25,
    priceRange: "₹300 for one",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isVegetarian: false,
    menu: [
      { id: 5, name: "Margherita Pizza", price: 299, category: "Pizza", veg: true },
      { id: 6, name: "Pepperoni Pizza", price: 399, category: "Pizza", veg: false },
      { id: 7, name: "Garlic Bread", price: 149, category: "Sides", veg: true },
      { id: 8, name: "Pasta Alfredo", price: 249, category: "Pasta", veg: true }
    ],
    offers: ["Buy 1 Get 1 Free", "20% off on orders above ₹599"]
  },
  {
    id: 3,
    name: "Green Leaf",
    cuisine: "Pure Veg, Indian",
    rating: 4.3,
    deliveryTime: 35,
    priceRange: "₹150 for one",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isVegetarian: true,
    menu: [
      { id: 13, name: "Masala Dosa", price: 120, category: "South Indian", veg: true },
      { id: 14, name: "Paneer Butter Masala", price: 220, category: "Main Course", veg: true },
      { id: 15, name: "Veg Pulao", price: 180, category: "Rice", veg: true },
      { id: 16, name: "Gulab Jamun", price: 60, category: "Desserts", veg: true }
    ],
    offers: ["20% off on all orders"]
  },
  {
    id: 4,
    name: "Sushi House",
    cuisine: "Japanese, Asian",
    rating: 4.7,
    deliveryTime: 40,
    priceRange: "₹500 for one",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isVegetarian: false,
    menu: [
      { id: 17, name: "California Roll", price: 449, category: "Sushi Rolls", veg: false },
      { id: 18, name: "Vegetable Tempura", price: 299, category: "Tempura", veg: true },
      { id: 19, name: "Miso Soup", price: 149, category: "Soup", veg: true },
      { id: 20, name: "Salmon Nigiri", price: 399, category: "Nigiri", veg: false }
    ],
    offers: ["15% off on first order", "Free miso soup with orders above ₹999"]
  }
];