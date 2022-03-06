const boutonIngredients = document.querySelector('.button_ingredients');
const inputIngredients = document.querySelector('.content_input_ingredient');


boutonIngredients.addEventListener('click', function(e) {
    e.preventDefault();
    inputIngredients.style.toggle.display = "block";
})