"use strict";

const chuckQuoteForm = document.querySelector("#chuckQuotesForm")

chuckQuoteForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const categoryValue = chuckQuoteForm.querySelector("select").value;
    updateChuckSays(categoryValue);
});
//Create a function to update the quote in the text
function updateChuckSays(category) {
//This object is a promise like today
    const chuckQuote = get(
    `https://api.chucknorris.io/jokes/random?category=${category}`
    );

    chuckQuote.then(function(quote) {
        chuckSays.innerHTML = quote.value;
    });
}
//Using get function to fetch data
function getCategories() {
    const selectWrapper = document.querySelector("#selectWrapper");
    const categoryList = document.createElement("select");
    
    get(`https://api.chucknorris.io/jokes/categories`).then(function(response){
        //returns the array into a list of individual values
        response.forEach(function(category) {
            const categoryOption = document.createElement("option");
            categoryOption.text = category;
            categoryOption.value = category;
            categoryList.append(categoryOption);
        });
    });
    //attaches grabbed list to new variable
    selectWrapper.append(categoryList);
}
// I(mmediately.I(nvoked.F(unction.E(xpression goes here. An annoymus funcion that just runs

(function() {
    const defaultCategory = 'dev';
    getCategories();
    updateChuckSays(defaultCategory);
})();

//Chuck Norris can write infinte recursion functions and have them return.