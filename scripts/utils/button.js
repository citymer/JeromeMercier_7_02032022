const boutonIngredients = document.querySelector('.button_ingredients');
const inputIngredients = document.querySelector('.ingredients');
const chevronUp = document.querySelector('.chevron_up');


// fait apparaitre l'input ingrédients
boutonIngredients.addEventListener('click', function(e) {
    e.preventDefault();
    
    inputIngredients.style.display = "block";
    boutonIngredients.style.display = "none";
})

//ferme l'input ingrédients
chevronUp.addEventListener('click', function(e) {
    e.preventDefault();
    inputIngredients.style.display = "none";
    boutonIngredients.style.display = "block";
})

const boutonAppareils = document.querySelector('.button_appareils');
const inputAppareils = document.querySelector('.appareils');
const chevronUpAppareils = document.querySelector('.chevron_up2');

// fait apparaitre l'input appareil
boutonAppareils.addEventListener('click', function(e) {
    e.preventDefault();
    
    inputAppareils.style.display = "block";
    boutonAppareils.style.display = "none";
})

//ferme l'input ingrédients
chevronUpAppareils.addEventListener('click', function(e) {
    e.preventDefault();
    inputAppareils.style.display = "none";
    boutonAppareils.style.display = "block";
})


const boutonUstensiles = document.querySelector('.button_ustensiles');
const inputUstensiles = document.querySelector('.ustensiles');
const chevronUpUstensiles = document.querySelector('.chevron_up3');

// fait apparaitre l'input appareil
boutonUstensiles.addEventListener('click', function(e) {
    e.preventDefault();
    
    inputUstensiles.style.display = "block";
    boutonUstensiles.style.display = "none";
})

//ferme l'input ingrédients
chevronUpUstensiles.addEventListener('click', function(e) {
    e.preventDefault();
    inputUstensiles.style.display = "none";
    boutonUstensiles.style.display = "block";
})

