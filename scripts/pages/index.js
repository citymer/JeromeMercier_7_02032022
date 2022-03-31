const {name,ingredients,time,description,id} = recipes[0];
const {ingredient, quantity, unit} = ingredients[0];


// crée un article
function articleRecipes(recette) {


  const main = document.querySelector('main');
  
  // ARTICLE
  const article = document.createElement('article');
  main.appendChild(article);
  article.setAttribute("class","article"); 
  article.id = recette.id;
      // IMG
     const imgArticle = document.createElement('img');
     article.appendChild(imgArticle);
     imgArticle.setAttribute("class","img_article");
     // DIV sous image 
     const divRecette = document.createElement('div');
     article.appendChild(divRecette);
     divRecette.setAttribute("class","divrecette");
         
          // div titre et temps de préparation
          const titreEtTemps = document.createElement('div');
          divRecette.appendChild(titreEtTemps);
          titreEtTemps.setAttribute("class","titre_et_temps");
               // H5
                const titreRecette = document.createElement('h5');
                titreEtTemps.appendChild(titreRecette);
                titreRecette.setAttribute("class","titre_recette");
                titreRecette.id = "titre";
                titreRecette.textContent = recette.name;
                // DIV
                const iconEtTemps = document.createElement('div');
                titreEtTemps.appendChild(iconEtTemps);
                iconEtTemps.setAttribute("class","icon_et_temps");
                  // SPAN
                  const contentClock = document.createElement('span');
                  iconEtTemps.appendChild(contentClock);
                       // IMG ICON CLOCK
                        const clock = document.createElement('img');
                        contentClock.appendChild(clock);
                        clock.setAttribute("class","clock");
                        clock.setAttribute("src","img/clock.png");
                  // P MINUTE
                  const tempsMinute = document.createElement('p');
                  iconEtTemps.appendChild(tempsMinute);
                  tempsMinute.setAttribute("class","temps_minute");
                  tempsMinute.textContent = recette.time + "min";
              
             // DIV contenant tous les ingrédients
            const ingredientsEtRecette = document.createElement('div');
            divRecette.appendChild(ingredientsEtRecette);
            ingredientsEtRecette.setAttribute("class","ingredients_et_description");
            ingredientsEtRecette.id = "ingredients_et_description";

                // contenant ingrédient
                const contentIngredients = document.createElement('div');
                ingredientsEtRecette.appendChild(contentIngredients);
                contentIngredients.setAttribute("class","content_ingredients");

                 recette.ingredients.forEach((ingredient) => {

                    const ligneIngredient = document.createElement('div');
                    contentIngredients.appendChild(ligneIngredient);
                    ligneIngredient.setAttribute("class","ligne_ingredient");

                        const ingredientRecette = document.createElement('span');
                        ligneIngredient.appendChild(ingredientRecette);
                        ingredientRecette.setAttribute("class","ingredient");
                        ingredientRecette.textContent = ingredient.ingredient;
                
          
                        const quantite = document.createElement('p');
                        ligneIngredient.appendChild(quantite);
                        quantite.setAttribute("class","quantity_unit");
                        quantite.textContent = ingredient.quantity;
          
               
          
                        const unit = document.createElement('p');
                        ligneIngredient.appendChild(unit);
                        unit.setAttribute("class","quantity_unit unit");
                        unit.textContent = ingredient.unit;
     
                 })

                   
             // contenant description
            const manuelRecette = document.createElement('p');
            ingredientsEtRecette.appendChild(manuelRecette);
            manuelRecette.setAttribute("class","manuel_recette");
            manuelRecette.textContent = recette.description;

                
}
           
      
// créer un article pour chaque recette
 recipes.forEach(articleRecipes);


 







         





      