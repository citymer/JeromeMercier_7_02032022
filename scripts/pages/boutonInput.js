/* :::::::::::           CREATION TABLEAUX (ingredient,appareil,ustensile)           ::::::::::: */

let ingredientArray = [];
let appareilArray = [];
let ustensileArray = [];

// recupere tous les ingredients et les envoie dans "ingredientArray"
recipes.forEach((recettes) => {
    recettes.ingredients.forEach((recette) => {
        ingredientArray.push(recette.ingredient);
    })
})
// recupere tous les appareils et les envoie dans "appareilArray"
recipes.forEach((recettes) => {
    appareilArray.push(recettes.appliance);
 
})
// recupere tous les ustensiles et les envoie dans "ustensileArray"
recipes.forEach((recettes) => {
    recettes.ustensils.forEach((recette) => {
        ustensileArray.push(recette);
    })
 
})
// supprime les doublons  et crée un nouveau tableau
let ingredientsFiltre = Array.from(new Set(ingredientArray));
let appareilFiltre = Array.from(new Set(appareilArray));
let ustensileFiltre = Array.from(new Set(ustensileArray));


/* :::::::::::::::        CREATION DES LISTES          ::::::::::::: */

const selectContentIngredient = document.querySelector('.content_list_ingredients');
// crée une balise "p" pour chaque INGREDIENT  
function createIngredient(){  
          ingredientsFiltre.forEach((liste) => {
              const ingredient = document.createElement('p');
              selectContentIngredient.appendChild(ingredient);
              ingredient.setAttribute("class","liste liste_ingredient");
              ingredient.textContent = liste; 
            })
}

const selectContentAppareil = document.querySelector('.content_list_appareils');
// crée une balise "p" pour chaque APPAREIL
function createAppareil() {
           appareilFiltre.forEach((liste) => {
               const appareils = document.createElement('p');
               selectContentAppareil.appendChild(appareils);
               appareils.setAttribute("class","liste liste_appareil");
               appareils.textContent = liste;
            })
}


const selectContentUstensile = document.querySelector('.content_list_ustensiles');
// crée une balise "p" pour chaque USTENSILE  
function createUstensile() {
    ustensileFiltre.forEach((liste) => {
        const ustensile = document.createElement('p');
        selectContentUstensile.appendChild(ustensile);
        ustensile.setAttribute("class","liste liste_ustensile");
        ustensile.textContent = liste;
    })
}     

/*   :::::::::::::::           CREATION DES TAGS ET FILTRE         ::::::::::::::  */

// TAG INGREDIENT //

// selectionne la div qui va contenir les tags
const tag = document.querySelector('.tags');

// Crée un tag quand on clique sur un ingredient de la liste
const allIngredients = document.getElementsByClassName('liste_ingredient');

function createTagIngredient() {    
    for (let i = 0; i < allIngredients.length; i++) {
    
        allIngredients[i].addEventListener('click' , function(e) {
            e.preventDefault();
            const tagIngredients = document.createElement('div');
            tag.appendChild(tagIngredients);
            tagIngredients.setAttribute("class","tag tagingredient ");
       
                   const tagText = document.createElement('p');
                   tagIngredients.appendChild(tagText);
                   tagText.setAttribute("class","tagtext mx-2");
                   tagText.textContent = allIngredients[i].innerHTML;
       
                   const close = document.createElement('img');
                   tagIngredients.appendChild(close);
                   close.setAttribute("class","close");
                   close.setAttribute("src","img/close.png");

                   // efface liste
                   close.addEventListener('click', function(e) {
                      e.preventDefault;
                      tagIngredients.remove();
                    });
                
            // referme l'INPUT du menu déroulant
            inputIngredients.style.display = "none";
            boutonIngredients.style.display = "block";
            // appel la fonction qui trie les recettes par TAG
            filterByTags(recipes);    
            // quand on ferme un tag 
            close.addEventListener('click', function() {
                filterCloseTag();
              
            });                   
               
        })
    } 
} 


      // TAG APPAREIL //

// Crée un tag quand on clique sur un appareil de la liste
function createTagAppareil() {
    const allAppareils = document.getElementsByClassName('liste_appareil');
 
   for (let i = 0; i < allAppareils.length; i++) {
       allAppareils[i].addEventListener('click' , function(e) {
              e.preventDefault();
       
              const tagAppareils = document.createElement('p');
              tag.appendChild(tagAppareils);
              tagAppareils.setAttribute("class","tag tagappareil");
       
                   const tagText = document.createElement('span');
                   tagAppareils.appendChild(tagText);
                   tagText.setAttribute("class","tagtext mx-2");
                   tagText.textContent = allAppareils[i].innerHTML;
       
       
                   const close = document.createElement('img');
                   tagAppareils.appendChild(close);
                   close.setAttribute("class","close");
                   close.setAttribute("src","img/close.png");
       
                   close.addEventListener('click', function(e) {
                    e.preventDefault;
                    tagAppareils.remove();
                }) 
            inputAppareils.style.display = "none";
            boutonAppareils.style.display = "block";
    
            filterByTags(recipes);
       
            // quand on ferme un tag 
            close.addEventListener('click', function() {
                filterCloseTag();
            }); 
        })
    } 
}

      // TAG USTENSILE //

// Crée un tag quand on clique sur un ustensile de la liste
function createtagUstensiles() {
    const allUstensiles = document.getElementsByClassName('liste_ustensile');
    
   for (let i = 0; i < allUstensiles.length; i++) {
       allUstensiles[i].addEventListener('click' , function(e) {
            e.preventDefault();
       
            const tagUstensiles = document.createElement('p');
            tag.appendChild(tagUstensiles);
            tagUstensiles.setAttribute("class","tag tagustensile");
       
                const tagText = document.createElement('span');
                tagUstensiles.appendChild(tagText);
                tagText.setAttribute("class","tagtext mx-2");
                tagText.textContent = allUstensiles[i].innerHTML;
       
                const close = document.createElement('img');
                tagUstensiles.appendChild(close);
                close.setAttribute("class","close");
                close.setAttribute("src","img/close.png");
       
                close.addEventListener('click', function(e) {
                    e.preventDefault;
                    tagUstensiles.remove();
                })

            inputUstensiles.style.display = "none";
            boutonUstensiles.style.display = "block"; 
                 
            filterByTags(recipes);

            // quand on ferme un tag 
            close.addEventListener('click', function() {
                 filterCloseTag();
            });
       
       })
   } 
}

// a la fermeture d'un tag , actualise la page
function filterCloseTag () {  
    filterByTags(recipes);  
}


/*       ::::::::::::::   TRIE DES LISTES : Ingredients , Appareils , Ustensiles   ::::::::::::       */

// INGREDIENTS //

// sélectionne l'input du bouton ingredients
const inputIngredient = document.querySelector('#inputIngredient');

inputIngredient.addEventListener('keyup',function() {
    
    let resultat = search(recipes);
    let liste = [];
    //récupere les ingredients affichés et l'envoi dans le tableau LISTE
    resultat.forEach(recette => {
        let ingredients = recette.ingredients;
        for(let list of ingredients) {
            liste.push(list.ingredient);
        }
    })
    // récupére la valeur de l'input
    const inputSearch = inputIngredient.value;

    // filtre le tableau LISTE et récupere les ingredients correspondant à la saisie sans les doublons
    const resultsearch = Array.from(new Set(liste)).filter(ingredient => 
        ingredient.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase()));
    

    // on vide la liste d'ingrédient 
    selectContentIngredient.innerHTML = "";
     
    
    // on crée une balise pour chaque résultat
    resultsearch.forEach(resultList => {

        const ingredient = document.createElement('p');
        selectContentIngredient.appendChild(ingredient);
        ingredient.setAttribute("class","liste liste_ingredient");
        ingredient.innerHTML = resultList;   
    })
    createTagIngredient();
   
})

         // APPAREILS //

// sélectionne l'input du bouton appareils
const inputAppareil = document.querySelector('#inputAppareil');


inputAppareil.addEventListener('keyup',function() {
    let resultat = search(recipes);
    let liste = [];
    //récupere les appareils affichés et l'envoi dans le tableau LISTE
    resultat.forEach(recette => {
        liste.push(recette.appliance);    
    })
    // récupére la valeur de l'input
    const inputSearch = inputAppareil.value;
    // filtre le tableau LISTE et récupere les appareils correspondant à la saisie sans les doublons
    const resultsearch = Array.from(new Set(liste)).filter(appareil => appareil.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase()));
    // on vide la liste d'appareil dans la page
    selectContentAppareil.innerHTML = ""; 
    // on crée une balise pour chaque résultat
    resultsearch.forEach(resultList => {
            
        const appareil = document.createElement('p');
        selectContentAppareil.appendChild(appareil);
        appareil.setAttribute("class","liste liste_appareil");
        appareil.innerHTML = resultList;    
    })   
    createTagAppareil();
  
})

         // USTENSILES //

// sélectionne l'input du bouton ingredients
const inputUstensile = document.querySelector('#inputUstensile');

inputUstensile.addEventListener('keyup',function() {
    let resultat = search(recipes);
    let liste = [];
    resultat.forEach(recette => {
        let ustensils = recette.ustensils;
        ustensils.forEach(ustensiles => {
            liste.push(ustensiles);    
        })
    }) 
    // récupére la valeur de l'input
    const inputSearch = inputUstensile.value;

    // filtre le tableau ingredient et récupere les ingredients correspondant à la saisie
    const resultsearch = Array.from(new Set(liste)).filter(ustensile => ustensile.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase()));

    // on vide la liste d'ingrédient dans la page
    selectContentUstensile.innerHTML = "";
     console.log(resultsearch);
    // on crée une balise pour chaque résultat
    resultsearch.forEach(resultList => {

        const ustensile = document.createElement('p');
        selectContentUstensile.appendChild(ustensile);
        ustensile.setAttribute("class","liste liste_ustensile");
        ustensile.innerHTML = resultList;    
    })
    createtagUstensiles();   
})

