const mainBar = document.querySelector('#input');
const valueInput = mainBar.value;
let resultPage = [];

// recherche une correspondance dans le titre des recettes
function filterTitle() {

    recipes.forEach((recette) => {
        let title = recette.name;
        let result = title.includes(mainBar.value);
        
        if (result === true) {
            articleRecipes(recette);
            console.log(articleRecipes(recette));
            
        }
        
    })
}

// recherche une correspondance dans la description
function filterDescription() {

    recipes.forEach((recette) => {
        let description = recette.description;
        let result = description.includes(mainBar.value);
        console.log(mainBar.value);

        if (result === true) {
            articleRecipes(recette);
            
        }
        
    })
}

// déclenche la recherche à partir du 3éme caractère
mainBar.addEventListener('keyup',function() {
  

    if (mainBar.value.length > 2){

        document.querySelector('#main').innerHTML = "";
      

        filterTitle();
        filterIngredients(mainBar.value,recipes);
        filterDescription();

        
    }
})