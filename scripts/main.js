"use strict";

const getMoreQuotesButton = document.getElementById("getMoreQuotes");
const chuckSays = document.getElementById("chuckSays");

// Add an event listener to the button, DON'T FORGET TO PREVENT THE DEFAULT BEHAVIOR!
// Call a function to return a new quote, and update the DOM
getMoreQuotesButton.addEventListener("click", function(e) {
    console.log("button clicked");
    updateChuckSays("dev");
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
updateChuckSays("food");

//Chuck Norris can write infinte recursion functions and have them return.