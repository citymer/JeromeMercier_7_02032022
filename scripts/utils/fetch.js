// Récupère tous les parametres des recettes dans le JSON  ***

async function getRecipes() {  

  
const allRecipes = [];

console.log(allRecipes);
   
    
    // rapatrie les données de recipes.json
    await fetch('./data/recipes.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();  
    })
    
    //  données des recettes récupérées dans le json
    .then(json => {
        const {recipes} = json;

    for (let id of recipes) {
        allRecipes.push(id);
    }        
       
   
        
     
   return allRecipes;
       
        
    })
    
    
    .catch(function () {
        this.dataError = true;
    })   
    
}

