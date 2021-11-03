const divArea = document.querySelector("#div-quotes-area");
const btnGenerate = document.querySelector("#btn-generate-quote");
const serverURL = 'https://api.quotable.io/random';

function generateQuote() {
    fetch(serverURL)
    .then(response => response.json())
    .then(response => {
        divArea.innerHTML = `<span id="quote-content" class="div-content">"${response.content}"</span> <span id="quote-author">- ${response.author}</span>`;
    }
    )
}
btnGenerate.addEventListener("click", generateQuote)