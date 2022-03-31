/*
let tags = document.querySelector('.tags');
let article = document.getElementsByClassName('article')
 let observer = new MutationObserver(tagRecord => {
     console.log(tagRecord);
     if (article.innerHTML.indexOf(tagRecord) > -1) {
        console.log(tagRecord);
        article.style.display = "block";
    } 
 });

 observer.observe(tags, {
     childList: true,
     characterDataOldValue: true
 });

*/