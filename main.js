let begining = [
  "Jenny likes flying,",
  "After he farted loudly",
  " An aligator jumped on top of box ",
  "The moving train",
  "Facing  north",
  "The ciupakabra was praying",
  "The old lady",
  "Piling an carrot",
  "Hamster puking on",
  "Dog riding horse",
];
let middle = [
  "kicked in the face",
  " back to his corner",
  "then flew back",
  "was dodging the muffin",
  "sliced in half",
  "rolled over",
  "has a dead mouse",
  "who was splipping",
  "your face",
  "with a bomb",
];
let end = [
  "over the fence",
  "he went",
  "to the spaceship",
  "with his face",
  "the orange disappeared",
  "to the ice cream cake",
  "on her face",
  "upside dawn",
  "stole the banana",
  "aroud his neck",
];

function randomSentenceGenerator() {
  for (let i = 0; i < 1; i++) {
    randomNumber = Math.floor(Math.random() * begining.length);
    let quote = document.getElementById("quote");
    quote.innerHTML +=
      begining[randomNumber] +
      " " +
      middle[randomNumber] +
      " " +
      end[randomNumber] +
      ".";
  }
}

randomSentenceGenerator();
