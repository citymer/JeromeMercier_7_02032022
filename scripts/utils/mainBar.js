const mainBar = document.querySelector('#input');
const valueInput = mainBar.value;
const loupe = document.querySelector('.loupe');

// recherche une correspondance dans le titre des recettes
function filterTitle(recette) {

    recipes.forEach((recette) => {
        let title = recette.name;
        let result = title.toLocaleLowerCase().includes(mainBar.value.toLocaleLowerCase());
    
        
        if (result === true) {
            articleRecipes(recette);
            
            
     
        }
        
    })
}

// recherche une correspondance dans la description
function filterDescription() {

    recipes.forEach((recette) => {
        let description = recette.description;
        let result = description.toLocaleLowerCase().includes(mainBar.value.toLocaleLowerCase());
        
        if (result === true) {
            articleRecipes(recette);
        
            
        }
    })
}

// recherche dans le titre,les ingredients,la description une correspondance avec la saisie dans la barre de recherche
function search() {
    
    if (mainBar.value.length > 2){

        let main = document.querySelector('#main').innerHTML = "";
      
        filterTitle();
        filterIngredients(mainBar.value,recipes);
        filterDescription();
   
        
    }
}

// déclenche la fonction "SEARCH" en cas de saisie dans la barre de recherche
mainBar.addEventListener('keyup',function() {
  
        search();
})

// déclenche la fonction "SEARCH" en cas de clic sur l'image loupe
loupe.addEventListener('click', function() {
    search();
})




