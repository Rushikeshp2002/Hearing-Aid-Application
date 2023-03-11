let quote = document.getElementById("quote");


const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
    });
};

window.addEventListener("load", getQuote);
window.addEventListener("click", getQuote);