const {name,ingredients,time,description,id} = recipes[0];
const {ingredient, quantity, unit} = ingredients[0];


function articleRecipes(id) {


const main = document.querySelector('main');

const article = document.createElement('article');
main.appendChild(article);
article.setAttribute("class","article");
article.id = id.id;

     const imgArticle = document.createElement('img');
     article.appendChild(imgArticle);
     imgArticle.setAttribute("class","img_article");

     const divRecette = document.createElement('div');
     article.appendChild(divRecette);
     divRecette.setAttribute("class","divrecette");
         
        // div titre et temps de préparation
        const titreEtTemps = document.createElement('div');
        divRecette.appendChild(titreEtTemps);
        titreEtTemps.setAttribute("class","titre_et_temps");

           const titreRecette = document.createElement('h5');
           titreEtTemps.appendChild(titreRecette);
           titreRecette.setAttribute("class","titre_recette");
           titreRecette.textContent = id.name;

           const iconEtTemps = document.createElement('div');
           titreEtTemps.appendChild(iconEtTemps);
           iconEtTemps.setAttribute("class","icon_et_temps");

              const contentClock = document.createElement('span');
              iconEtTemps.appendChild(contentClock);

                  const clock = document.createElement('img');
                  contentClock.appendChild(clock);
                  clock.setAttribute("class","clock");
                  clock.setAttribute("src","img/clock.png");

              const tempsMinute = document.createElement('p');
              iconEtTemps.appendChild(tempsMinute);
              tempsMinute.setAttribute("class","temps_minute");
              tempsMinute.textContent = id.time + "min";

        const ingredientsEtRecette = document.createElement('div');
        divRecette.appendChild(ingredientsEtRecette);
        ingredientsEtRecette.setAttribute("class","ingredients_et_recette");

              // contenant ingrédient
            const contentIngredients = document.createElement('div');
            ingredientsEtRecette.appendChild(contentIngredients);
            contentIngredients.setAttribute("class","content_ingredients");

         
                  const ingredientQuantityUnit = document.createElement('div');
                  contentIngredients.appendChild(ingredientQuantityUnit);
                  ingredientQuantityUnit.setAttribute("class","ingredient_quantity_unit");
                  
                   
                      const ingredientRecette = document.createElement('span');
                      ingredientQuantityUnit.appendChild(ingredientRecette);
                      ingredientRecette.setAttribute("class","ingredient");
                      ingredientRecette.textContent = ingredient;
          
                      const quantiteUnit = document.createElement('p');
                      ingredientQuantityUnit.appendChild(quantiteUnit);
                      quantiteUnit.setAttribute("class","quantity_unit");
                      quantiteUnit.textContent = quantity + unit;
          

            const manuelRecette = document.createElement('p');
            ingredientsEtRecette.appendChild(manuelRecette);
            manuelRecette.setAttribute("class","manuel_recette");
            manuelRecette.textContent = id.description;

                
}



// créer un article pour chaque recette
function createArticle() {
      recipes.forEach((id) => {
            articleRecipes(id);
      })
    
}