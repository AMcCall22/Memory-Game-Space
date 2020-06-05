//Initialise variables.

let firstCard = 0;
let i = 0;
let j = 0;

//OnCardClicked Function
//Create onCardClicked function to replace the facedown(rocket) image with the planet image
//onclick ="onCardClicked(event)" added to each planet div in index.html
//Reassign target to the card just clicked then increment i

function onCardClicked(planet) {
  let target = planet.currentTarget;
  target.className = target.className.replace("facedown", "");
  i++;

//Add audio when card is clicked
  const mySound = document.getElementById("sound");
  document.querySelector("planet")
    mySound.currentTime = 0;
    mySound.play();
    
  

  //Match Function
  //Check for a match for each planet element, matching on "data-framework"
  //Point to matched or unmatched function

  if (i === 1) {
    firstCard = target;
    firstCard.classList.add("disabled");
  } else {
    i = 0;
    if (
      firstCard.getAttribute("data-framework") ===
      target.getAttribute("data-framework")
    ) {
      console.log("has been matched");
      matched();

      if (j > 6) {
        endModal();
      }
    } else {
      console.log("has not been matched");
      unmatched();
    }
  }

  //Matched Function
  //If data-framework matches on firstCard and Target, add the matches class to each, within a timeout of 1000ms
  //Disable and then enable function added around the timeout of adding the matches class
  //Count the number of times a match is made
  function matched() {
    console.log("match function");
    disable();
    setTimeout(() => {
      firstCard.classList.add("matches");
      target.classList.add("matches");
      enable();
      j++;
      console.log("no of pair " + j);
      document.getElementById("pairCounter").innerHTML = j;
    }, 1000);
  }

  //Disable Function
  //Sets pointer events temporarily to none to limit the player to clicking on more than 2 cards before a 'match' or 'unmatch'
  function disable() {
    console.log("disable function");
    const planetContainer = document.querySelectorAll(".planet");
    for (let i = 0; i < planetContainer.length; i++) {
      planetContainer[i].classList.add("disabled");
    }
  }

  //Enable Function
  //Removes the pointer event disabled function to allow play to continue
  function enable() {
    console.log("enable function");
    const planetContainer = document.querySelectorAll(".planet");
    for (let i = 0; i < planetContainer.length; i++) {
      if (planetContainer[i].className.search("matches") === -1) {
        planetContainer[i].classList.remove("disabled");
      }
    }
  }

  //Unmatched Function
  //If data-framework does not match on firstCard and Target, add the 'facedown' (rocket image) back onto the object, within a timeout of 2000ms
  function unmatched() {
    console.log("nomatch function");
    disable();
    setTimeout(() => {
      firstCard.classList.add("facedown");
      target.classList.add("facedown");
      enable();
    }, 20);
  }
}

//Reset Function
// Reset functionality add to turn all planets back to 'facedown' class at any point in the game.  An 'onclick' has had the id of restart button in index.html.

function reset() {
  console.log("reset selected");
  const planetContainer = document.querySelectorAll(".planet");
  for (let i = 0; i < planetContainer.length; i++) {
    planetContainer[i].classList.remove("matches");
    planetContainer[i].classList.add("facedown");
    planetContainer[i].classList.remove("disabled");
  }
  j = 0;
  document.getElementById("pairCounter").innerHTML = j;
  firstCard = 0;
  i = 0;
}

function endModal() {
  console.log("END");

  let gameModal = document.getElementById("endGameModal");
  gameModal.classList.add("modalshow");
  let closeButton = document.querySelector("#end-close-button");
  closeButton.addEventListener("click", function () {
    gameModal.classList.add("closed");
    addEventListener("click", reset());
  });
  gameModal.classList.remove("closed");
  shuffle();
}

function startModal() {
  let gameModal = document.getElementById("startGameModal");
  gameModal.classList.add("modalshow");
  let closeButton = document.querySelector("#start-close-button");
  closeButton.addEventListener("click", function () {
    gameModal.classList.toggle("closed");
  });
}
startModal();

//Fisher-Yates method Stackoverflow

/*function shuffle(array) {
    for (let i = (array.length-1); i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// Planets Array
function startGame() {
  const planetContainer = document.querySelectorAll(".planet");
  const planetsToShuffle = document.querySelector(".game-space");
  let planets = shuffle(planetContainer);
console.log(planets)
  for (let i = 0; i < planets.length; i++) {
    [].forEach.call(planets, function (item) {
      planetsToShuffle.appendChild(item);
      console.log(i);
    });
  }
}

startGame();
console.log("shuffled");
console.log(i);*/
