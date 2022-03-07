async function init() {

        
    // Récupère les datas des photographes
    const recipes = await getRecipes();

    articleRecipes(recipes);

    
};

init();