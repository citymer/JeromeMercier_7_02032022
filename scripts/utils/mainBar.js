const mainBar = document.querySelector('#input');
const valueInput = mainBar.value;
const loupe = document.querySelector('.loupe');


// recherche une correspondance dans le titre des recettes
function filterTitle(recette) { 
    let title = recette.name;
    return title.toLocaleLowerCase().includes(mainBar.value.toLocaleLowerCase());
}

// recherche une correspondance dans la description
function filterDescription(recette) { 
    let description = recette.description;
    return description.toLocaleLowerCase().includes(mainBar.value.toLocaleLowerCase());       
}

function filterIngredient(recette) {
    let result = false;
    recette.ingredients.forEach((liste) => {
        let ingredient = liste.ingredient;
        result = ingredient.toLocaleLowerCase().includes(mainBar.value.toLocaleLowerCase());
        if (result === true) {
            return true;
        }
    })
    return result;
}

// recherche dans le titre,les ingredients,la description une correspondance avec la saisie dans la barre de recherche
function search(recipes) {
    let resultat = [];
    
    if (mainBar.value.length > 2){
        recipes.forEach((recette) => {
            if (filterTitle(recette) ||filterIngredient(recette) || filterDescription(recette)) {
                resultat.push(recette);
            }
        })  
    }
    if (mainBar.value.length < 3) {
        return recipes;
    }
    if (resultat.length === 0) {
        messageError();  
    }

    
    return resultat;
}

// déclenche la fonction "SEARCH" en cas de saisie dans la barre de recherche
mainBar.addEventListener('keyup',function() {
    let main = document.querySelector('#main').innerHTML = "";
    let resultat = search(recipes);
    resultat.forEach((recette) => {
        articleRecipes(recette);
    })
    updateIngredientList();
    updateAppareilList();
    updateUstensileList();
    
})

// déclenche la fonction "SEARCH" en cas de clic sur l'image loupe
loupe.addEventListener('click', function() {
    let main = document.querySelector('#main').innerHTML = "";
    let resultat = search(recipes);
    resultat.forEach((recette) => {
        articleRecipes(recette);
    })
    updateIngredientList();
    updateAppareilList();
    updateUstensileList();
    
})


// crée un message en cas d'aucune correspondance avec la recherche
function messageError() {
        const message = document.createElement('div');
        main.appendChild(message);
        message.setAttribute("class","message");
        message.textContent = "Aucune recette correspond à votre critère...vous pouvez chercher << tarte aux pommes >> , << poisson >> , etc.";
   
}

// actualise la liste d'ingredient
function updateIngredientList() {
    document.querySelector('.content_list_ingredients').innerHTML = "";
    let resultat = search(recipes);
    let liste = [];
    resultat.forEach(recette => {
        let ingredients = recette.ingredients;
        for(let list of ingredients) {
            liste.push(list.ingredient);
        }
    })
    let ingredientSansDoublons = Array.from(new Set(liste));
    ingredientSansDoublons.forEach(ingredient => {
        listeIngredient(ingredient);  
    })
    createTagIngredient();
}

// actualise la liste d'appareil
function updateAppareilList() {
    document.querySelector('.content_list_appareils').innerHTML = "";
    let resultat = search(recipes);
    let liste = [];
    resultat.forEach(recette => {
        liste.push(recette.appliance);    
    })
    let appareilSansDoublons = Array.from(new Set(liste));
    appareilSansDoublons.forEach(appareils => {
        listeAppareil(appareils)
    })
    createTagAppareil();
}

// actualise la liste d'ustensile
function updateUstensileList() {
    document.querySelector('.content_list_ustensiles').innerHTML = "";
    let resultat = search(recipes);
    let liste = [];
    resultat.forEach(recette => {
        let ustensils = recette.ustensils;
        ustensils.forEach(ustensiles => {
            liste.push(ustensiles);    
        })
    })
    let ustensileSansDoublons = Array.from(new Set(liste));
    ustensileSansDoublons.forEach(ustensile => {
        listeUstensile(ustensile);
    })
    createtagUstensiles();
}


