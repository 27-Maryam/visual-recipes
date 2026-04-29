// -----------------------------
// SIDE MENU TOGGLE FUNCTIONS
// -----------------------------

function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("open");
    document.getElementById("overlay").style.display = "block";
}


function closeMenu() {
    document.getElementById("sideMenu").classList.remove("open");
    document.getElementById("overlay").style.display = "none";
}


function showHome() {
    closeMenu();
    document.getElementById("home").style.display = "grid";
    document.getElementById("meals-section").style.display = "none";
}

function showMealCategory(category) {
    closeMenu();
    document.getElementById("home").style.display = "none";
    document.getElementById("meals-section").style.display = "block";

    const title = document.getElementById("meal-category-title");
    const container = document.getElementById("meal-cards-container");
    title.textContent = category;

    container.innerHTML = "";

    const items = {
        "Meals": ["Breakfast","Lunch","Dinner","Snack","Brunch","Appetizers","Soup","Desserts"],
        "Drinks": ["Juices","Smoothies","Cocktails","Tea","Coffee"],
        "Events": ["Birthday","Party","Wedding","Festivals"],
        "Ingredients": ["Vegetables","Fruits","Spices","Meat","Dairy"]
    };

    const categoryItems = items[category] || [];

    categoryItems.forEach(item => {
        const card = document.createElement("div");
        card.className = "home-card";
        card.style.background = randomColor();
        card.innerHTML = `<h3>${item}</h3>`;
        container.appendChild(card);
    });
}


// -----------------------------
// RANDOM COLOR HELPER
// -----------------------------
function randomColor() {
    const colors = ["#FFB347","#FF7E5F","#FF9966","#FFD700","#FF6F61","#FFB6C1","#87CEFA","#8FBC8F"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// -----------------------------
// SIDE MENU NAVIGATION
// -----------------------------

function goHome() {
    window.location.href = "index.html";
}

function goCategory(category) {
    window.location.href = `category.html?category=${encodeURIComponent(category)}`;
}

function goAbout() {
    closeMenu();
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}
