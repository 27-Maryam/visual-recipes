const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("http://localhost:3000/recipes")
    .then(res => res.json())
    .then(recipes => {
        const recipe = recipes.find(r => r.id == id);

        document.getElementById("recipe-name").innerText = recipe.name;
        document.getElementById("recipe-image").src = recipe.image;

        const ingDiv = document.getElementById("ingredients");
        recipe.ingredients.forEach(icon => {
            ingDiv.innerHTML += `<div class="icon">${icon}</div>`;
        });

        const stepDiv = document.getElementById("steps");
        recipe.steps.forEach((step, i) => {
            stepDiv.innerHTML += `<div class="icon">${step}</div>`;
            if (i < recipe.steps.length - 1) {
                stepDiv.innerHTML += `<div class="arrow">➡️</div>`;
            }
        });
    });
