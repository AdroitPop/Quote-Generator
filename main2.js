//variables
const type = document.querySelector("#quote_type");
const quoteContainer = document.querySelector("#quote");
const number = document.querySelector("#quote_number");

const war = [
  //quote start
  [
    "God created war so ",
    "War is wha",
    "The true soldier fights not because ",
    "Older men declare war.",
    "Appear weak when you are strong",
  ],
  //quote Middle
  [
    "that Americans would ",
    "happens when ",
    "he hates what is in front of him,",
    "But it is youth that,",
    "nd strong when",
  ],
  // quote end
  [
    "learn geography.",
    "language fails.",
    "but because he loves what is behind him.",
    "must fight and die.",
    "you are weak.",
  ],
];

const peace = [
  //quote start
  [
    "Peace is the ",
    "Peace cannot be kept by force,",
    "The more we sweat in peace, ",
    "An eye for an eye",
    "If everyone demanded peace ",
  ],
  //quote Middle
  [
    "only battle",
    "it can only be achieved ",
    "he less we bleed,",
    "will only make the",
    " instead of another television set,",
  ], // quote end
  [
    "worth waging.",
    "by understanding.",
    "in war.",
    "whole world blind.",
    "then there'd be peace.",
  ],
];



//button - removes previous quote and generates new

document.querySelector("#btn").addEventListener("click", function () {
  const generatedQuote = document.querySelectorAll(".generatedQuote");

  for (const quote of generatedQuote) {
    quote.remove();
  }

  for (let i = 0; i < number.value; i++) {
    generateQuote(type.value);
  }
});
// for of loop - for the 2 arrays

function generateQuote(type) {
  let randomNumber = Math.floor(Math.random() * 5);
  let finishedQuote = "";

  if (type === "war") {
    for (const fragment of war) {
      finishedQuote += `${fragment[randomNumber]}`;
    }
  }

  if (type === "peace") {
    for (const fragment of peace) {
      finishedQuote += `${fragment[randomNumber]}`;
    }
  }
  const node = document.createElement("p");
  node.classList.add("generatedQuote");
  const textNode = document.createTextNode(finishedQuote);
  node.appendChild(textNode);
  quoteContainer.appendChild(node);
}

//reset / quit quote generator

function reset() {
  location.reload();
}