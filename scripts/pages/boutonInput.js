// creation tableau

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


// supprime les doublons dans "ustensileArray" et crée un nouveau tableau
const filteredUstensile = ustensileArray.filter((el, index) => ustensileArray.indexOf(el) !== index)
const ustensileFiltre = [...new Set(filteredUstensile)]




 // crée une balise "p" pour chaque ingredient  
const selectContentIngredient = document.querySelector('.content_list_ingredients');

     ingredientsFiltre.forEach((liste) => {
         
         const ingredient = document.createElement('p');
         selectContentIngredient.appendChild(ingredient);
         ingredient.setAttribute("class","liste liste_ingredient");
         ingredient.textContent = liste;
         
       
        })

 // crée une balise "p" pour chaque appareil
const selectContentAppareil = document.querySelector('.content_list_appareils');

      appareilFiltre.forEach((liste) => {
          const appareils = document.createElement('p');
          selectContentAppareil.appendChild(appareils);
          appareils.setAttribute("class","liste liste_appareil");
          appareils.textContent = liste;
      })

   // crée une balise "p" pour chaque ustensile  
const selectContentUstensile = document.querySelector('.content_list_ustensiles');
     
       ustensileFiltre.forEach((liste) => {
           const ustensile = document.createElement('p');
           selectContentUstensile.appendChild(ustensile);
           ustensile.setAttribute("class","liste liste_ustensile");
           ustensile.textContent = liste;
       })




    const allIngredients = document.getElementsByClassName('liste_ingredient');
    
    const tag = document.querySelector('.tags');
   for (let i = 0; i < allIngredients.length; i++) {

       allIngredients[i].addEventListener('click' , function(e) {
              e.preventDefault();
       
              const tagIngredients = document.createElement('p');
              tag.appendChild(tagIngredients);
              tagIngredients.setAttribute("class","tag");
       
              const spanClose = document.createElement('span');
              tagIngredients.appendChild(spanClose);
              spanClose.setAttribute("class","spanclose");
              spanClose.innerHTML = ingredient.liste;
       
       
                   const close = document.createElement('img');
                   tagIngredients.appendChild(close);
                   close.setAttribute("class","close");
                   close.setAttribute("src","img/close.png");
       
       
       
       })
   } 
