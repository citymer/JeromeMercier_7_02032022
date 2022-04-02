// crée un article  pour chaque correspondance entre le tag ingredient et les recettes
function filterIngredients(valueTagText,recipes) {

               
    // efface tous les articles contenus dans le "MAIN"
   document.querySelector('#main').innerHTML = "";
   
   /* parcours tout le tableau "recipes" et recherche les recettes qui contiennent l'ingredient choisi
    puis créer un article pour chaque résultat */

   recipes.forEach((recette) => {
       recette.ingredients.forEach((liste) => {
           let ingredient = liste.ingredient;
           let result = ingredient.includes(valueTagText);
           if (result === true) {
               articleRecipes(recette);
           }
       })
   })
   
}

// crée un article pour chaque correspondanceentre le tag appareil et les recettes
function filterAppareils(valueTagText,recipes) {

       // efface tous les articles contenus dans le "MAIN"
       document.querySelector('#main').innerHTML = "";
                    
       /* parcours tout le tableau "recipes" et recherche les recettes qui contiennent l'appareil choisi
        puis créer un article pour chaque résultat */

       recipes.forEach((recette) => {
           
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
              
       /* parcours tout le tableau "recipes" et recherche les recettes qui contiennent l'ustensile choisi
        puis créer un article pour chaque résultat */

       recipes.forEach((recette) => {
           console.log(recette.ustensils);
               let ustensile =  recette.ustensils
               
               let result = ustensile.includes(valueTagText);
               if (result === true) {
                   articleRecipes(recette);
               }
           
       })
}




