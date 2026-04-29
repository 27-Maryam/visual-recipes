// -----------------------------
// Get category from URL
// -----------------------------

const params = new URLSearchParams(window.location.search);
const mainCategory = params.get("category"); // e.g., Meals, Drinks


const container = document.getElementById("sub-category-container");

// Define sub-items for each category
const subItems = {
    "Meals": [
        { name: "Breakfast", img: "images/breakfast.jpg" },
        { name: "Lunch", img: "images/lunch.jpg" },
        { name: "Dinner", img: "images/dinner.jpg" },
        { name: "Snack", img: "images/snack.jpg" },
        { name: "Brunch", img: "images/brunch.jpg" },
        { name: "Appetizers", img: "images/appetizers.jpg" },
        { name: "Soup", img: "images/soup.jpg" },
        { name: "Desserts", img: "images/desserts.jpg" }
    ],
    "Drinks": [
        { name: "Juices", img: "images/juices.jpg" },
        { name: "Smoothies", img: "images/smoothies.jpg" },
        { name: "Cocktails", img: "images/cocktails.jpg" },
        { name: "Tea", img: "images/tea.jpg" },
        { name: "Coffee", img: "images/coffee.jpg" }
    ],
    "Events": [
        { name: "Birthday", img: "images/birthday.jpg" },
        { name: "Party", img: "images/party.jpg" },
        { name: "Wedding", img: "images/wedding.jpg" },
        { name: "Festivals", img: "images/festivals.jpg" }
    ],
    "Ingredients": [
        { name: "Vegetables", img: "images/vegetables.jpg" },
        { name: "Fruits", img: "images/fruits.jpg" },
        { name: "Spices", img: "images/spices.jpg" },
        { name: "Meat", img: "images/meat.jpg" },
        { name: "Dairy", img: "images/dairy.jpg" }
    ]
};

// -----------------------------
// Display cards
// -----------------------------
const items = subItems[mainCategory] || [];

items.forEach(item => {
    const card = document.createElement("div");
    card.className = "home-card";

    card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
    `;

    // 👇 THIS IS CRITICAL
       card.onclick = () => {
            window.location.href = `items.html?sub=${item.name}`;
};


    container.appendChild(card);
});




// -----------------------------
// Back button function
// -----------------------------
function goHome() {
    window.location.href = "index.html";
}
