import {images} from './images';

export const menuItems = [
  // Pizzas
  {
    id: 1,
    name: "Margherita Pizza",
    category: "pizza",
    price: 299,
    description: "Classic mozzarella, fresh basil & tomato sauce.",
    image: images.margherita
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    category: "pizza",
    price: 349,
    description: "Spicy pepperoni with melted cheese.",
    image: images.pepperoni
  },
  {
    id: 3,
    name: "BBQ Chicken Pizza",
    category: "pizza",
    price: 379,
    description: "Smoky BBQ sauce with grilled chicken.",
    image: images.bbqPizza
  },

  // Burgers
  {
    id: 4,
    name: "Classic Veg Burger",
    category: "burger",
    price: 199,
    description: "Grilled veggie patty with lettuce & sauce.",
    image: images.classicBurger
  },
  {
    id: 5,
    name: "Cheese Chicken Burger",
    category: "burger",
    price: 249,
    description: "Juicy chicken patty with double cheese.",
    image: images.chickenBurger
  },
  {
    id: 6,
    name: "Mexican Spicy Burger",
    category: "burger",
    price: 269,
    description: "Loaded with jalapeños & chipotle sauce.",
    image: images.mexicanBurger
  },

  // Pastas
  {
    id: 7,
    name: "Pasta Alfredo",
    category: "pasta",
    price: 279,
    description: "Creamy Alfredo sauce with herbs.",
    image: images.alfredoPasta
  },
  {
    id: 8,
    name: "Spaghetti Bolognese",
    category: "pasta",
    price: 319,
    description: "Rich meat sauce with parmesan.",
    image: images.spaghettiPasta
  },
  {
    id: 9,
    name: "Arrabbiata Pasta",
    category: "pasta",
    price: 289,
    description: "Spicy tomato sauce with garlic.",
    image: images.arrabbiataPasta
  },

  // Main Courses
  {
    id: 10,
    name: "Chicken Biryani",
    category: "main",
    price: 349,
    description: "Fragrant basmati rice with tender chicken.",
    image: images.chickenBiryani
  },
  {
    id: 11,
    name: "Paneer Butter Masala",
    category: "main",
    price: 299,
    description: "Creamy tomato gravy with paneer cubes.",
    image: images.paneerButterMasala
  },
  {
    id: 12,
    name: "Grilled Salmon",
    category: "main",
    price: 499,
    description: "Fresh salmon grilled with herbs.",
    image: images.grilledSalmon
  },

  // Starters
  {
    id: 13,
    name: "Garlic Bread",
    category: "starter",
    price: 149,
    description: "Toasted bread with garlic butter.",
    image: images.garlicBread
  },
  {
    id: 14,
    name: "Chicken Wings",
    category: "starter",
    price: 279,
    description: "Crispy wings tossed in spicy sauce.",
    image: images.chickenWings
  },
  {
    id: 15,
    name: "Spring Rolls",
    category: "starter",
    price: 199,
    description: "Crispy vegetable spring rolls.",
    image: images.springRolls
  },

  // Desserts
  {
    id: 16,
    name: "Chocolate Brownie",
    category: "dessert",
    price: 149,
    description: "Warm brownie with chocolate drizzle.",
    image: images.chocolateBrownie
  },
  {
    id: 17,
    name: "Cheesecake",
    category: "dessert",
    price: 179,
    description: "Creamy cheesecake with berry topping.",
    image: images.cheeseCake
  },

  // Drinks
  {
    id: 18,
    name: "Cold Coffee",
    category: "drink",
    price: 129,
    description: "Chilled coffee with whipped cream.",
    image: images.coldCoffee
  },
  {
    id: 19,
    name: "Fresh Lime Soda",
    category: "drink",
    price: 99,
    description: "Refreshing lime soda.",
    image: images.freshLimeSoda
  },
  {
    id: 20,
    name: "Mango Smoothie",
    category: "drink",
    price: 159,
    description: "Thick mango smoothie with ice.",
    image: images.mangoSmoothie
  }
];
