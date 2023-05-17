// const quoteContainer = document.getElementById("quote-container");
// const butQuote = document.getElementById("quote-but");

// const fetchQuote = fetch("https://thatsthespir.it/api");

// function loadQuote(){
//     fetchQuote
//     .then((response) => response.json())
//     .then((data) => {
//         createQuote(data.quote, data.author);
//         console.log(data.quote);
//         console.log(data.author);
//     })
//     .catch((error) => {
//         console.log("There was an error!", error);
//     });
// }

// function createQuote(quote, author){
//     let newQuote = document.createElement("blockquote");
//     let newAuthor = document.createElement("cite");

//     newQuote.textContent = quote;
//     newAuthor.textContent = author;

//     quoteContainer.innerHTML = "";
//     quoteContainer.appendChild(newQuote);
//     quoteContainer.appendChild(newAuthor);
// }

// butQuote.addEventListener("click", loadQuote);



const quoteContainer = document.getElementById('quote-container');
const generateButton = document.getElementById('quote-but');

generateButton.addEventListener('click', fetchRandomQuote);

async function fetchRandomQuote() {
    try {
    const response = await fetch('https://thatsthespir.it/api');
    const data = await response.json();

    if (response.ok) {
        displayQuote(data);
    } else {
        throw new Error(data.message);
    }
    } catch (error) {
        displayError(error.message);
    }
}

function displayQuote(quoteData) {
    const quoteElement = document.createElement('div');
    quoteElement.className = 'quote';

    const quoteTextElement = document.createElement('p');
    quoteTextElement.className = 'quote-text';
    quoteTextElement.textContent = quoteData.quote;

    const quoteAuthorElement = document.createElement('p');
    quoteAuthorElement.className = 'quote-author';
    quoteAuthorElement.textContent = `- ${quoteData.author}`;

    quoteElement.appendChild(quoteTextElement);
    quoteElement.appendChild(quoteAuthorElement);

    quoteContainer.innerHTML = '';
    quoteContainer.appendChild(quoteElement);
}

function displayError(errorMessage) {
    const errorElement = document.createElement('p');
    errorElement.className = 'error-message';
    errorElement.textContent = `Error: ${errorMessage}`;

    quoteContainer.innerHTML = '';
    quoteContainer.appendChild(errorElement);
}