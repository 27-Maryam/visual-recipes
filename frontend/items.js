// -----------------------------
// Get subcategory from URL
// -----------------------------
const params = new URLSearchParams(window.location.search);
const subCategory = params.get("sub"); // e.g., Breakfast, Lunch, Juices, Birthday, etc.

const container = document.getElementById("menu-container");

// -----------------------------
// Define menu items for each subcategory
// -----------------------------
const menuItems = {
    "Breakfast": [
        "Halwa Puri",
        "Anda Paratha",
        "Chana Masala",
        "Aloo Bhujia",
        "Suji ka Halwa",
        "Omelette with Toast",
        "Lassi",
        "Paratha with Butter"
    ],
    "Lunch": [
        "Chicken Karahi",
        "Beef Biryani",
        "Daal Chawal",
        "Roghani Naan with Curry",
        "Palak Paneer",
        "Chicken Korma",
        "Mixed Vegetable Curry"
    ],
    "Dinner": [
        "Grilled Chicken Tikka",
        "Biryani",
        "Seekh Kebabs",
        "Chicken Handi",
        "Chapli Kebabs",
        "Aloo Gosht"
    ],
    "Snack": [
        "Samosa",
        "Pakora",
        "Chana Chaat",
        "Gol Gappa",
        "Aloo Tikki"
    ],
    "Brunch": [
        "Eggs Benedict (with local twist)",
        "Anda Paratha",
        "Fried Fish",
        "Fruit Chaat",
        "Paneer Sandwich"
    ],
    "Appetizers": [
        "Chicken Nuggets",
        "Spring Rolls",
        "Hummus with Pita",
        "Stuffed Mushrooms",
        "Mini Kebabs"
    ],
    "Soup": [
        "Chicken Corn Soup",
        "Tomato Soup",
        "Yakhni Soup",
        "Vegetable Soup",
        "Lentil Soup"
    ],
    "Desserts": [
        "Gajar ka Halwa",
        "Kheer",
        "Ras Malai",
        "Jalebi",
        "Falooda",
        "Chocolate Brownie (local style)"
    ],
    "Juices": [
        "Apple Juice",
        "Pomegranate Juice",
        "Mango Juice",
        "Watermelon Juice",
        "Carrot Juice"
    ],
    "Smoothies": [
        "Banana Smoothie",
        "Mango Smoothie",
        "Strawberry Smoothie",
        "Dates Milkshake"
    ],
    "Cocktails": [
        "Mint Lemon Cooler",
        "Rooh Afza Drink",
        "Peach Iced Drink",
        "Lemon Ginger Drink"
    ],
    "Tea": [
        "Chai (Masala Tea)",
        "Green Tea",
        "Cardamom Tea",
        "Lemon Ginger Tea"
    ],
    "Coffee": [
        "Black Coffee",
        "White Coffee",
        "Cappuccino",
        "Latte"
    ],
    "Birthday": [
        "Chocolate Cake",
        "Vanilla Cake",
        "Cupcakes",
        "Pancakes",
        "Fruit Tart"
    ],
    "Party": [
        "Chicken Shawarma",
        "Beef Kebabs",
        "Vegetable Spring Rolls",
        "Mini Pizzas",
        "Cheese Balls"
    ],
    "Wedding": [
        "Mutton Biryani",
        "Chicken Korma",
        "Seekh Kebabs",
        "Roghani Naan",
        "Salad & Raita"
    ],
    "Festivals": [
        "Sweets (Jalebi, Barfi, Laddu)",
        "Pulao",
        "Biryani",
        "Pakoras",
        "Chicken Karahi",
        "Daal Chawal"
    ]
};

// -----------------------------
// Helper function: random bright color
// -----------------------------
function randomColor() {
    const colors = [
        "#FFB347", "#FF7E5F", "#FF9966", "#FFD700", "#FF6F61",
        "#FFB6C1", "#87CEFA", "#8FBC8F", "#9b5de5", "#00b4d8",
        "#f15bb5", "#00ffcc", "#ffa500", "#7fffd4"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// -----------------------------
// Display menu items dynamically
// -----------------------------
const items = menuItems[subCategory] || [];

items.forEach(dish => {
    const div = document.createElement("div");
    div.className = "menu-dish";
    div.style.background = randomColor();
    div.style.color = "black"; // ensures black text
    div.textContent = dish;
    container.appendChild(div);
});
