export interface MenuItem {
  name: string;
  price: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  emoji: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "hot-beverages",
    title: "Hot Beverages",
    emoji: "☕",
    items: [
      { name: "Cappuccino", price: "₹69" },
      { name: "Latte", price: "₹69" },
      { name: "Flat White", price: "₹69" },
      { name: "Americano", price: "₹59" },
      { name: "Hazelnut Cappuccino", price: "₹89" },
      { name: "Irish Cream Latte", price: "₹89" },
      { name: "Hot Chocolate", price: "₹139" },
      { name: "Belgian Hot Chocolate", price: "₹189" },
      { name: "70% Dark Belgian Chocolate", price: "₹199" },
    ],
  },
  {
    id: "cold-beverages",
    title: "Cold Beverages",
    emoji: "🥤",
    items: [
      { name: "Virgin Mojito", price: "₹99" },
      { name: "Blue Lagoon Mocktail", price: "₹99" },
      { name: "Masala Lemonade", price: "₹109" },
      { name: "Hazelnut Frappuccino", price: "₹169" },
      { name: "Irish Cold Coffee (with ice cream/without)", price: "₹139/169" },
      { name: "French Vanilla Cold Coffee", price: "₹169" },
      { name: "Nutella Chocolate Milkshake", price: "₹199" },
    ],
  },
  {
    id: "ice-cream-shakes",
    title: "Ice Cream Shakes",
    emoji: "🥛",
    items: [
      { name: "Vanilla Milk Shake", price: "₹179" },
      { name: "Butterscotch Shake", price: "₹179" },
      { name: "Belgian Chocolate Shake", price: "₹199" },
      { name: "Litchi Shake", price: "₹179" },
      { name: "Strawberry Shake", price: "₹179" },
      { name: "Mango Punch Shake", price: "₹179" },
      { name: "Brownie Bites Shake", price: "₹199" },
    ],
  },
  {
    id: "chewy-cookies",
    title: "Chewy Cookies",
    emoji: "🍪",
    items: [
      { name: "American Chocolate", price: "₹79" },
      { name: "Red Velvet Cookie", price: "₹79" },
      { name: "Lavender Cranberry Cookie", price: "₹79" },
      { name: "Oats and Dates Cookie", price: "₹79" },
      { name: "Pista and Cranberry Biscooti", price: "₹79" },
      { name: "Dark Centre Cookie", price: "₹79" },
    ],
  },
  {
    id: "sundae",
    title: "Sundae",
    emoji: "🍨",
    items: [
      { name: "Brownie Sundae", price: "₹199" },
      { name: "Caramel Mocha", price: "₹199" },
      { name: "Gulab Jamun Sundae", price: "₹199" },
      { name: "Malai Chocochip Sundae", price: "₹199" },
      { name: "Waffle with Ice Cream (any ice cream)", price: "₹199" },
    ],
  },
  {
    id: "ice-cream",
    title: "Ice Cream",
    emoji: "🍦",
    items: [
      { name: "Madagascar Vanilla", price: "₹49" },
      { name: "Strawberry", price: "₹59" },
      { name: "Alphonso Mango", price: "₹59" },
      { name: "Litchi Crush", price: "₹59" },
      { name: "Tutti Fruiti", price: "₹49" },
      { name: "Chocochip Ice Cream", price: "₹79" },
      { name: "Belgian Chocolate", price: "₹79" },
      { name: "70% Dark Chocolate", price: "₹79" },
      { name: "Butterscotch", price: "₹59" },
      { name: "Red Velvet Cream Cheese", price: "₹79" },
      { name: "Blueberry Cheesecake", price: "₹79" },
      { name: "Lotus Biscoff", price: "₹69" },
      { name: "Black Forest Ice Cream", price: "₹69" },
      { name: "American Nuts", price: "₹59" },
      { name: "Milk Cake", price: "₹69" },
      { name: "Tiramisu", price: "₹79" },
      { name: "Caffe Mocha", price: "₹69" },
    ],
  },
  {
    id: "waffles",
    title: "Waffles",
    emoji: "🧇",
    items: [
      { name: "Milk Chocolate", price: "₹89" },
      { name: "Dark Chocolate", price: "₹99" },
      { name: "White Chocolate", price: "₹89" },
      { name: "Red Velvet Cream Cheese", price: "₹119" },
      { name: "Pista Kunafa", price: "₹179" },
      { name: "Almond Kunafa", price: "₹179" },
      { name: "Kitkat Brownie Waffle", price: "₹179" },
      { name: "Gems Waffle", price: "₹119" },
      { name: "Maple Syrup Waffle", price: "₹119" },
      { name: "Nutella", price: "₹179" },
      { name: "Dark and White", price: "₹119" },
      { name: "Tripple Chocolate", price: "₹119" },
      { name: "Red Velvet Blueberry Cheesecake", price: "₹179" },
      { name: "Biscoff Cheesecake", price: "₹179" },
      { name: "Berry Waffle", price: "₹119" },
      { name: "Cookies and Cream", price: "₹99" },
    ],
  },
  {
    id: "baked-snacks",
    title: "Baked Snacks",
    emoji: "🥐",
    items: [
      { name: "Veg Patty Burger", price: "₹69" },
      { name: "Paneer Hot Dog", price: "₹69" },
      { name: "Veggie Sandwich", price: "₹49" },
      { name: "Paneer Sandwich", price: "₹69" },
      { name: "Sliced Pizza (Paneer/Cheese Corn)", price: "₹69" },
      { name: "Chilli Paneer Puff", price: "₹49" },
      { name: "Paneer Puff", price: "₹49" },
      { name: "Aloo Puff", price: "₹39" },
    ],
  },
  {
    id: "kulfi",
    title: "Kulfi",
    emoji: "🍧",
    items: [
      { name: "Kesar Kulfi", price: "₹100" },
      { name: "Pista Kulfi", price: "₹120" },
    ],
  },
];
