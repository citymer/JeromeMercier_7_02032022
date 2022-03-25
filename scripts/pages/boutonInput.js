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




// supprime les doublons dans "ingredientArray" et crée un nouveau tableau
const filteredIngredient = ingredientArray.filter((el, index) => ingredientArray.indexOf(el) !== index)
const ingredientsFiltre = [...new Set(filteredIngredient)]


// supprime les doublons dans "appareilArray" et crée un nouveau tableau
const filteredAppareil = appareilArray.filter((el, index) => appareilArray.indexOf(el) !== index)
const appareilFiltre = [...new Set(filteredAppareil)]
console.log(appareilFiltre)


// supprime les doublons dans "ustensileArray" et crée un nouveau tableau
const filteredUstensile = ustensileArray.filter((el, index) => ustensileArray.indexOf(el) !== index)
const ustensileFiltre = [...new Set(filteredUstensile)]


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

   // crée une balise "p" pour chaque USTENSILE  

const selectContentUstensile = document.querySelector('.content_list_ustensiles');
function createUstensile() {

    ustensileFiltre.forEach((liste) => {

        const ustensile = document.createElement('p');
        selectContentUstensile.appendChild(ustensile);
        ustensile.setAttribute("class","liste liste_ustensile");
        ustensile.textContent = liste;
    })
}     


/*   :::::::::::::::           CREATION DES TAGS          ::::::::::::::  */

    // TAG INGREDIENT //

// selectionne la div qui va contenir les tags
const tag = document.querySelector('.tags');

// Crée un tag quand on clique sur un ingredient de la liste
function createTagIngredient() {

    const allIngredients = document.getElementsByClassName('liste_ingredient');
    
    for (let i = 0; i < allIngredients.length; i++) {
    
       allIngredients[i].addEventListener('click' , function(e) {
              e.preventDefault();
       
              const tagIngredients = document.createElement('div');
              tag.appendChild(tagIngredients);
              tagIngredients.setAttribute("class","tag tagingredient ");
       
                   const spanClose = document.createElement('p');
                   tagIngredients.appendChild(spanClose);
                   spanClose.setAttribute("class","spanclose mx-2");
                   spanClose.textContent = allIngredients[i].innerHTML;
       
       
                   const close = document.createElement('img');
                   tagIngredients.appendChild(close);
                   close.setAttribute("class","close");
                   close.setAttribute("src","img/close.png");
                   
                   close.addEventListener('click', function(e) {
                    e.preventDefault;
                    tagIngredients.remove();
                })
       
       
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
       
                   const spanClose = document.createElement('span');
                   tagAppareils.appendChild(spanClose);
                   spanClose.setAttribute("class","spanclose mx-2");
                   spanClose.textContent = allAppareils[i].innerHTML;
       
       
                   const close = document.createElement('img');
                   tagAppareils.appendChild(close);
                   close.setAttribute("class","close");
                   close.setAttribute("src","img/close.png");
       
                   close.addEventListener('click', function(e) {
                    e.preventDefault;
                    tagAppareils.remove();
                }) 
       
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
       
                  const spanClose = document.createElement('span');
                  tagUstensiles.appendChild(spanClose);
                  spanClose.setAttribute("class","spanclose mx-2");
                  spanClose.textContent = allUstensiles[i].innerHTML;
       
       
                   const close = document.createElement('img');
                   tagUstensiles.appendChild(close);
                   close.setAttribute("class","close");
                   close.setAttribute("src","img/close.png");
       
       
                   close.addEventListener('click', function(e) {
                       e.preventDefault;
                       tagUstensiles.remove();
                   })
       
       })
   } 
}

/*       ::::::::::::::   TRIE DES LISTES : Ingredients , Appareils , Ustensiles   ::::::::::::       */

          // INGREDIENTS //

// sélectionne l'input du bouton ingredients
const inputIngredient = document.querySelector('#inputIngredient');

inputIngredient.addEventListener('keyup',function() {
     
    // récupére la valeur de l'input
    const inputSearch = inputIngredient.value;

    // filtre le tableau ingredient et récupere les ingredients correspondant à la saisie
    const resultsearch = ingredientsFiltre.filter(ingredient => ingredient.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase()));

    // on vide la liste d'ingrédient dans la page
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
    
    // récupére la valeur de l'input
    const inputSearch = inputAppareil.value;
    
    // filtre le tableau appareil et récupere les appareils correspondant à la saisie
    const resultsearch = appareilFiltre.filter(appareil => appareil.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase()));
    

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
     
    // récupére la valeur de l'input
    const inputSearch = inputUstensile.value;

    // filtre le tableau ingredient et récupere les ingredients correspondant à la saisie
    const resultsearch = ustensileFiltre.filter(ustensile => ustensile.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase()));

    // on vide la liste d'ingrédient dans la page
    selectContentUstensile.innerHTML = "";
     
    // on crée une balise pour chaque résultat
    resultsearch.forEach(resultList => {

        const ustensile = document.createElement('p');
        selectContentUstensile.appendChild(ustensile);
        ustensile.setAttribute("class","liste liste_ustensile");
        ustensile.innerHTML = resultList;

        
        
    })
    createtagUstensiles();

   
})

