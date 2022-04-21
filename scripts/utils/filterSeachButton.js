// crée un article  pour chaque correspondance entre le tag ingredient et les recettes
function filterIngredients(valueTagText,recipes) {
           
    // efface tous les articles contenus dans le "MAIN"
   document.querySelector('#main').innerHTML = "";

   // récupère le résultat de la recherche principale
   let resultat = search(recipes);
   // récupère les ingredients,appareils des recettes afficher
   let listeIngredients = [];
   let listeAppareils = [];
   let listeUstensiles = [];
   
   /* parcours tout le tableau "resultat" et recherche les recettes qui contiennent l'ingredient choisi
    puis créer un article pour chaque résultat */
   resultat.forEach((recette) => {
       recette.ingredients.forEach((liste) => {
           let ingredient = liste.ingredient;
           let result = ingredient.toLocaleLowerCase().includes(valueTagText.toLocaleLowerCase());
           if (result === true) {
              articleRecipes(recette);

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
        })
    })
   // met a jour la liste des ingredients
   let ingredientsSansDoublons = Array.from(new Set(listeIngredients));
   document.querySelector('.content_list_ingredients').innerHTML = "";
   ingredientsSansDoublons.forEach(ingredient => {
       listeIngredient(ingredient);
    })
   createTagIngredient();
   // met à jour la liste d'appareil
   let appareilSansDoublons = Array.from(new Set(listeAppareils));
   document.querySelector('.content_list_appareils').innerHTML = "";
   appareilSansDoublons.forEach(appareils => {
       listeAppareil(appareils)
   })
   createTagAppareil();
   //met à jour la liste d'ustensiles
   let ustensilesSansDoublons = Array.from(new Set(listeUstensiles));
   document.querySelector('.content_list_ustensiles').innerHTML = "";
   ustensilesSansDoublons.forEach(ustensile => {
      listeUstensile(ustensile);
   })
   createtagUstensiles();
   
}


// crée un article pour chaque correspondanceentre le tag appareil et les recettes
function filterAppareils(valueTagText,recipes) {

       // efface tous les articles contenus dans le "MAIN"
       document.querySelector('#main').innerHTML = "";

       // récupère le résultat de la echerche principale
       let resultat = search(recipes);
       // récupère les ingredients,appareils des recettes afficher
       let listeIngredients = [];
       let listeAppareils = [];
       let listeUstensiles = [];
                    
       /* parcours tout le tableau "resultat" et recherche les recettes qui contiennent l'appareil choisi
        puis créer un article pour chaque résultat */

       resultat.forEach((recette) => {
           
               let appareil =  recette.appliance
               let result = appareil.includes(valueTagText);
               if (result === true) {    
                   articleRecipes(recette);
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
                
        })
    // met a jour la liste des ingredients
    let ingredientsSansDoublons = Array.from(new Set(listeIngredients));
    document.querySelector('.content_list_ingredients').innerHTML = "";
    ingredientsSansDoublons.forEach(ingredient => {
        listeIngredient(ingredient);
    })
    createTagIngredient();
    // met à jour la liste d'appareil
    let appareilSansDoublons = Array.from(new Set(listeAppareils));
    document.querySelector('.content_list_appareils').innerHTML = "";
    appareilSansDoublons.forEach(appareils => {
        listeAppareil(appareils)
    })
    createTagAppareil();
    //met à jour la liste d'ustensiles
    let ustensilesSansDoublons = Array.from(new Set(listeUstensiles));
    document.querySelector('.content_list_ustensiles').innerHTML = "";
    ustensilesSansDoublons.forEach(ustensile => {
        listeUstensile(ustensile);
    })
    createtagUstensiles();
}

// crée un article pour chaque correspondanceentre le tag ustensiles et les recettes
function filterUstensiles(valueTagText,recipes) {
    
       // efface tous les articles contenus dans le "MAIN"
       document.querySelector('#main').innerHTML = "";

        // récupère le résultat de la echerche principale
        let resultat = search(recipes);

        // récupère les ingredients,appareils des recettes afficher
        let listeIngredients = [];
        let listeAppareils = [];
        let listeUstensiles = [];
              
       /* parcours tout le tableau "resultat" et recherche les recettes qui contiennent l'ustensile choisi
        puis créer un article pour chaque résultat */

       resultat.forEach((recette) => {
               let ustensile =  recette.ustensils
               let result = ustensile.includes(valueTagText);
               if (result === true) {
                   articleRecipes(recette);

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
           
       })
    // met a jour la liste des ingredients
   let ingredientsSansDoublons = Array.from(new Set(listeIngredients));
   document.querySelector('.content_list_ingredients').innerHTML = "";
   ingredientsSansDoublons.forEach(ingredient => {
       listeIngredient(ingredient);
    })
   createTagIngredient();
   // met à jour la liste d'appareil
   let appareilSansDoublons = Array.from(new Set(listeAppareils));
   document.querySelector('.content_list_appareils').innerHTML = "";
   appareilSansDoublons.forEach(appareils => {
       listeAppareil(appareils)
   })
   createTagAppareil();
   //met à jour la liste d'ustensiles
   let ustensilesSansDoublons = Array.from(new Set(listeUstensiles));
   document.querySelector('.content_list_ustensiles').innerHTML = "";
   ustensilesSansDoublons.forEach(ustensile => {
      listeUstensile(ustensile);
   })
   createtagUstensiles();   
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


