// crée un article  pour chaque correspondance entre le tag ingredient et les recettes
function filterIngredients(valueTagText,recipes) {

               
    // efface tous les articles contenus dans le "MAIN"
   document.querySelector('#main').innerHTML = "";

   // récupère le résultat de la recherche principale
   let resultat = search(recipes);

   /* parcours tout le tableau "resultat" et recherche les recettes qui contiennent l'ingredient choisi
    puis créer un article pour chaque résultat */

   resultat.forEach((recette) => {
       recette.ingredients.forEach((liste) => {
           let ingredient = liste.ingredient;
           let result = ingredient.toLocaleLowerCase().includes(valueTagText.toLocaleLowerCase());
           if (result === true) {
              articleRecipes(recette); 
              
            }
       })
   })
   
}

function listeIngredient(ingredient) {
    const ingredients = document.createElement('p');
    selectContentIngredient.appendChild(ingredients);
    ingredients.setAttribute("class","liste liste_ingredient");
    ingredients.textContent = ingredient.ingredient; 
}
// crée un article pour chaque correspondanceentre le tag appareil et les recettes
function filterAppareils(valueTagText,recipes) {

       // efface tous les articles contenus dans le "MAIN"
       document.querySelector('#main').innerHTML = "";

       // récupère le résultat de la echerche principale
       let resultat = search(recipes);
                    
       /* parcours tout le tableau "resultat" et recherche les recettes qui contiennent l'appareil choisi
        puis créer un article pour chaque résultat */

       resultat.forEach((recette) => {
           
               let appareil =  recette.appliance
               let result = appareil.includes(valueTagText);
               if (result === true) {    
                   articleRecipes(recette);
               }
               
           })
}

// crée un article pour chaque correspondanceentre le tag ustensiles et les recettes
function filterUstensiles(valueTagText,recipes) {
    
       // efface tous les articles contenus dans le "MAIN"
       document.querySelector('#main').innerHTML = "";

        // récupère le résultat de la echerche principale
        let resultat = search(recipes);
              
       /* parcours tout le tableau "resultat" et recherche les recettes qui contiennent l'ustensile choisi
        puis créer un article pour chaque résultat */

       resultat.forEach((recette) => {
               let ustensile =  recette.ustensils
               let result = ustensile.includes(valueTagText);
               if (result === true) {
                   articleRecipes(recette);
               }
           
       })
}




