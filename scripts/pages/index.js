const main = document.querySelector('main');

const article = document.createElement('article');
main.appendChild(article);
article.setAttribute("class","article");

     const imgArticle = document.createElement('img');
     article.appendChild(imgArticle);
     imgArticle.setAttribute("class","img_article");

     const divRecette = document.createElement('div');
     article.appendChild(divRecette);
     divRecette.setAttribute("class","divrecette");
         
        // contenu titre, icone, temps en minute
        const titreEtTemps = document.createElement('div');
        divRecette.appendChild(titreEtTemps);
        titreEtTemps.setAttribute("class","titre_et_temps");

           const titreRecette = document.createElement('h5');
           titreEtTemps.appendChild(titreRecette);
           titreRecette.setAttribute("class","titre_recette");
           titreRecette.textContent = "titre de la recette"

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
              tempsMinute.textContent ="80 min";

        const ingredientsEtRecette = document.createElement('div');
        divRecette.appendChild(ingredientsEtRecette);
        ingredientsEtRecette.setAttribute("class","ingredients_et_recette");

            const contentIngredients = document.createElement('div');
            ingredientsEtRecette.appendChild(contentIngredients);
            contentIngredients.setAttribute("class","content_ingredients");
                 
                  const ingredient = document.createElement('p');
                  contentIngredients.appendChild(ingredient);
                  ingredient.setAttribute("class","ingredient");
                  ingredient.textContent ="Ingredients: 200g";

            const contentRecette = document.createElement('div');
            ingredientsEtRecette.appendChild(contentRecette);
            contentRecette.setAttribute("class","content_recette");

                  const manuelRecette = document.createElement('p');
                  contentRecette.appendChild(manuelRecette);
                  manuelRecette.setAttribute("class","manuel_recette");
                  manuelRecette.textContent = "blablabla blablablablablablabla";


              