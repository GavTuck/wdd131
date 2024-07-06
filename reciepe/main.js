import recipes from './reciepe.mjs';


(function eventlisteners() {
    const searchInput = document.querySelector('input');
    searchInput.addEventListener('input', queryrecipes);
})();

function queryrecipes(event){
    Template(recipes.filter((recipe) => {
        return contains(recipe.name, event.target.value) || contains( recipe.description,event.target.value) || recipe.tags.some(tag => contains(tag, event.target.value));
    }));
}
function Template(searchedrecipe) {
    const ids = document.querySelector('section');
    ids.innerHTML = ""
    searchedrecipe.forEach(recepieinfo => {ids.innerHTML +=
        `<section class="recipe">
            <img src="${recepieinfo["image"]}" alt="apple crisp">
            <div class="recipe-info">
            <ul class ="tags">${recepieinfo["tags"].map(tag => `<li>${tag}</li>` ).join("")}</ul>
                <h3>${recepieinfo["name"]}</h3>
                <p>${recepieinfo["stars"]}</p>
                <p>${recepieinfo["description"]}</p>
            </div>       
        </section>`           
    });
}



   



(function Random(){
    const index = Math.floor(Math.random() * recipes.length);
    Template([recipes[index]]);
})();

function contains(sentence, word) {
    console.log (sentence, word)
    return sentence.toLowerCase().includes(word.toLowerCase());
}