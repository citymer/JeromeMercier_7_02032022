// BOUTON INGREDIENT ////////////////////////////////////////

const boutonIngredients = document.querySelector('.button_ingredients');
const inputIngredients = document.querySelector('.ingredients');
const chevronUp = document.querySelector('.chevron_up');


// fait apparaitre l'input-bouton ingrédients
boutonIngredients.addEventListener('click', function(e) {
    e.preventDefault();
    
    inputIngredients.style.display = "block";
    boutonIngredients.style.display = "none";
    
    openTagIngredient();
})

//ferme l'input ingrédients
chevronUp.addEventListener('click', function(e) {
    e.preventDefault();
    inputIngredients.style.display = "none";
    boutonIngredients.style.display = "block";
})


// BOUTON APPAREIL //////////////////////////////////////

const boutonAppareils = document.querySelector('.button_appareils');
const inputAppareils = document.querySelector('.appareils');
const chevronUpAppareils = document.querySelector('.chevron_up2');

// fait apparaitre l'input-bouton appareil
boutonAppareils.addEventListener('click', function(e) {
    e.preventDefault();
    
    inputAppareils.style.display = "block";
    boutonAppareils.style.display = "none";
    openTagAppareil();
})

//ferme l'input ingrédients
chevronUpAppareils.addEventListener('click', function(e) {
    e.preventDefault();
    inputAppareils.style.display = "none";
    boutonAppareils.style.display = "block";
})

// BOUTON USTENSILES /////////////////////////////////////

const boutonUstensiles = document.querySelector('.button_ustensiles');
const inputUstensiles = document.querySelector('.ustensiles');
const chevronUpUstensiles = document.querySelector('.chevron_up3');

// fait apparaitre l'input-bouton appareil
boutonUstensiles.addEventListener('click', function(e) {
    e.preventDefault();
    
    inputUstensiles.style.display = "block";
    boutonUstensiles.style.display = "none";
    openTagUstensiles();
})

//ferme l'input ingrédients
chevronUpUstensiles.addEventListener('click', function(e) {
    e.preventDefault();
    inputUstensiles.style.display = "none";
    boutonUstensiles.style.display = "block";
})

function openTagIngredient() {
    let ingredientElement = document.getElementsByClassName('liste_ingredient');
    for (let i = 0; i < ingredientElement.length; i++) {
        ingredientElement[i].addEventListener('click', function() {
            createTagIngredient();
        })
    }
}
function openTagAppareil() {
    let appareilElement = document.getElementsByClassName('liste_appareil');
    for (let i = 0; i < appareilElement.length; i++) {
        appareilElement[i].addEventListener('click', function() {
            createTagAppareil();
        })
    }
}
function openTagUstensiles() {
    let ustensileElement = document.getElementsByClassName('liste_ustensile');
    for (let i = 0; i < ustensileElement.length; i++) {
        ustensileElement[i].addEventListener('click', function() {
            createtagUstensiles();
        })
    }
}