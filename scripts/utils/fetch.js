// Récupère tous les parametres des recettes dans le JSON  ***

async function getRecipes() {  

      // OBTENIR les parametres URL
      //const getId = window.location.search;
     // const urlParams = new URLSearchParams (getId);
      //const idRecipes = urlParams.get ('id');

    const recipes = [];
    console.log(recipes);
    
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
        this.recipes = json.recipes;
       console.log();
     
    return recipes;
         
        
    })
    
    
    .catch(function () {
        this.dataError = true;
    })   
    
}
console.log("rrr");