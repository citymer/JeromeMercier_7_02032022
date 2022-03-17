// creation tableau

let ingredientArray = [];
let appareilArray = [];
let ustensileArray = [];


// recupere tous les ingredients
recipes.forEach((recettes) => {
    recettes.ingredients.forEach((recette) => {
        ingredientArray.push(recette.ingredient);
    })
})


// recupere tous les appareils 
recipes.forEach((recettes) => {
    appareilArray.push(recettes.appliance);
 
})

// recupere tous les ustensiles
recipes.forEach((recettes) => {
    recettes.ustensils.forEach((recette) => {
        ustensileArray.push(recette);
    })
 
})




// supprime les doublons dans "ingredientArray" et crée un nouveau tableau
const filteredIngredient = ingredientArray.filter((el, index) => ingredientArray.indexOf(el) !== index)
const ingredientsFiltre = [...new Set(filteredIngredient)]
console.log(ingredientsFiltre);

// supprime les doublons dans "appareilArray" et crée un nouveau tableau
const filteredAppareil = appareilArray.filter((el, index) => appareilArray.indexOf(el) !== index)
const appareilFiltre = [...new Set(filteredAppareil)]
console.log(appareilFiltre);

// supprime les doublons dans "ustensileArray" et crée un nouveau tableau
const filteredUstensile = ustensileArray.filter((el, index) => ustensileArray.indexOf(el) !== index)
const ustensileFiltre = [...new Set(filteredUstensile)]
console.log(ustensileFiltre);