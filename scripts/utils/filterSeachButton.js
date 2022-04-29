// crée un article  pour chaque correspondance entre le tag ingredient et les recettes
function filterByTags(recipes) {
           
   // récupère le résultat de la recherche principale
   let resultat = search(recipes);
   // récupère les ingredients,appareils des recettes afficher
   let listeIngredients = [];
   let listeAppareils = [];
   let listeUstensiles = [];
   // sélectionne les tags affichés
   let ingredientTag = document.querySelectorAll('.tagingredient');
   let appareilTag = document.querySelectorAll('.tagappareil');
   let ustensileTag = document.querySelectorAll('.tagustensile');
 
   if(ingredientTag.length > 0) {
       let resultDisplay = [];
       ingredientTag.forEach(valueTag => {
           resultat.forEach(recette => {
               recette.ingredients.forEach((liste) => {
                  let ingredient = liste.ingredient;
                  let resultIngredient = ingredient.toLocaleLowerCase().includes(valueTag.innerText.toLocaleLowerCase());
                  if(resultIngredient === true) {
                       resultDisplay.push(recette);
                    }
                })
            })
        })
    resultat = resultDisplay;
    }

   if(appareilTag.length > 0) {
       let resultDisplay = [];
       appareilTag.forEach(valueTag => {
           resultat.forEach(recette => {
              let appareil =  recette.appliance
              let resultAppareil = appareil.includes(valueTag.innerText);
              if(resultAppareil === true) {
                  resultDisplay.push(recette);
                }
            })
        })
    resultat = resultDisplay;
    }

   if (ustensileTag.length > 0) {
       let resultDisplay = [];
       ustensileTag.forEach(valueTag => {
            resultat.forEach(recette => {   
              let ustensile =  recette.ustensils
              let resultUstensile = ustensile.includes(valueTag.innerText);
              if(resultUstensile === true) {
                  resultDisplay.push(recette);
                }
            })
        })   
    resultat = resultDisplay;
    }
    console.log(resultat);
    // efface tous les articles contenus dans le "MAIN"
    document.querySelector('#main').innerHTML = "";
    resultat.forEach(recette => {
        articleRecipes(recette);
        arrayRecette(recette,listeIngredients,listeAppareils,listeUstensiles); 
    })

   // met a jour la liste des ingredients
   let ingredientsSansDoublons = Array.from(new Set(listeIngredients));
   document.querySelector('.content_list_ingredients').innerHTML = "";
   ingredientsSansDoublons.forEach(ingredient => {
       listeIngredient(ingredient);
    })
   
   // met à jour la liste d'appareil
   let appareilSansDoublons = Array.from(new Set(listeAppareils));
   document.querySelector('.content_list_appareils').innerHTML = "";
   appareilSansDoublons.forEach(appareils => {
       listeAppareil(appareils)
   })
   
   //met à jour la liste d'ustensiles
   let ustensilesSansDoublons = Array.from(new Set(listeUstensiles));
   document.querySelector('.content_list_ustensiles').innerHTML = "";
   ustensilesSansDoublons.forEach(ustensile => {
      listeUstensile(ustensile);
   })   
}

// met à jour les listes d'ingredient,d'appareil,d'ustensile
function arrayRecette(recette,listeIngredients,listeAppareils,listeUstensiles) {
    let recettes = [];
    recettes.push(recette);
  
    recettes.forEach(liste => {
        for(let ingredient of liste.ingredients) {
           listeIngredients.push(ingredient.ingredient);
          }
      })
    recettes.forEach(liste => {
        listeAppareils.push(liste.appliance) 
    })
    recettes.forEach(liste => {
        for(let ustensile of liste.ustensils) {
            listeUstensiles.push(ustensile);
        }
    })  
}

// construit un ingredient
function listeIngredient(ingredient) {
    const ingredients = document.createElement('p');
    selectContentIngredient.appendChild(ingredients);
    ingredients.setAttribute("class","liste liste_ingredient");
    ingredients.textContent = ingredient; 
}
// construit un appareil
function listeAppareil(appareils) {
    const appareil = document.createElement('p');
    selectContentAppareil.appendChild(appareil);
    appareil.setAttribute("class","liste liste_appareil");
    appareil.textContent = appareils; 
}
// construit un ustensile
function listeUstensile(ustensile) {
    const ustensiles = document.createElement('p');
    selectContentUstensile.appendChild(ustensiles);
    ustensiles.setAttribute("class","liste liste_ustensile");
    ustensiles.textContent = ustensile;
}



