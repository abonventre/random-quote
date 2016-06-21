// Array of Quote Objects
var quotes = [
  {
    category: "Civilization",
    source: "Amos Bronson Alcott",
    text: "Civilization degrades the many to exalt the few.",
    year: 1877,
    citation: "Table Talk"
  },
  {
    category: "Civilization",
    source: "Havelock Ellis",
    text: "The more rapidly a civilization progresses, the sooner it dies for another to rise in its place.",
    year: 1923,
    citation: "The Dance of Life"
  },
  {
    category: "Maturity",
    source: "Lawana Blackwell",
    text: "Age is no guarantee of maturity.",
    year: 1998,
    citation: "The Courtship of the Vicar's Daughter,"
  },
  {
    category: "Optimism",
    source: "James Branch Cabell",
    text: "The optimist proclaims that we live in the best of all possible worlds; and the pessimist fears this is true.",
    year: 1926,
    citation: "The Silver Stallion"
  },
  {
    category: "Optimism",
    source: "Oscar Wilde",
    text: "The reason we all like to think so well of others is that we are all afraid for ourselves. The basis of optimism is sheer terror.",
    year: 1891,
    citation: "The Picture of Dorian Gray"
  },
  {
    category: "Change",
    source: "Henry David Thoreau",
    text: "Things do not change; we change.",
    year: 1970,
    citation: "Walden"
  },
  {
    category: "Evil",
    source: "Theodore Roosevelt",
    text: "No man is justified in doing evil on the ground of expediency.",
    year: 1900,
    citation: "'The Strenuous Life'"
  }
];


var quotesCopy = [], // Empty array to hold a copy of the quotes
    bgColor = "#36b55c",
    countdown = 10000, // Amount of time to wait before changing the quote
    quoteBox = document.getElementById('quote-box'),
    quoteDiv = quoteBox.getElementsByClassName("quote")[0],
    source = quoteBox.getElementsByClassName("source")[0];

// setInterval to print a quote after a specified amount of ms
var qouteTimer = window.setInterval(printQuote, countdown);

// Function: getRandomQuote
// Returns: {Object} a random quote from the quotes array.
function getRandomQuote() {

  // Check if the copy of the quotes array is empty, if it is refill it
  if(quotesCopy.length === 0){
    quotesCopy = quotes.slice(0);
  }

  // Get a random number and set the chosenQuote to the quote at the position of the random number
  var randomNumber = Math.floor((Math.random()*quotesCopy.length)),
      chosenQuote = quotesCopy[randomNumber];

  // Remove the quote from the quotesCopy array
  quotesCopy.splice(randomNumber, 1);

  // Return the chosen quote object
  return chosenQuote;
}

// Function: getRandomQuote
// Returns: prints the quote to the screen using the template
function printQuote() {

  var quote = getRandomQuote(),
      sourceHTML = quote.source + "<span class=\"citation\">"+quote.citation+"</span><span class=\"year\">"+quote.year+"</span>";

  // Set the background color based on the category of the quote
  switch (quote.category) {
    case "Civilization":
      bgColor = "slateblue";
      break;
    case "Maturity":
      bgColor = "orange";
      break;
    case "Optimism":
      bgColor = "lightsteelblue";
      break;
    case "Change":
      bgColor = "#36b55c";
      break;
    case "Evil":
      bgColor = "salmon";
      break;
    default:
      bgColor = "#36b55c";
  }

  // Set the body bg-color to bgColor
  document.body.style.backgroundColor = bgColor;

  // Write the quote test to the div
  quoteDiv.innerHTML = quote.text;

  // Write the source text to the p
  source.innerHTML = sourceHTML;

}

// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
