//Initialise variables
let firstCard = 0;
let firstClick = true;
let j = 0;
let k = 0;

//OnCardClicked Function
//This replaces the facedown(rocket)image with the planet image
//onmousedown ="onCardClicked(event)" added to each planet div in index.html
//Reassign target to the planet just clicked
function onCardClicked(planet) {
  let target = planet.currentTarget;
  target.className = target.className.replace("facedown", "");

  //Add audio when planet is clicked
  const mySound = document.getElementById("sound");
  document.querySelector("planet");
  mySound.currentTime = 0;
  mySound.play();

  //Counter provides total number of clicks per game
  k++;
  document.getElementById("Counter").innerHTML = k;

  //Match Function
  //Check for a match for each planet element, matching on "data-framework"
  //Point to matched or unmatched function

  if (firstClick === true) {
    firstCard = target;
    firstCard.classList.add("disabled");
    firstClick = false;
  } else {
    if (
      firstCard.getAttribute("data-framework") ===
      target.getAttribute("data-framework")
    ) {
      matched();
      if (j > 6) {
        endModal();
      }
    } else {
      unmatched();
    }
    firstClick = true;
  }

  //Matched Function
  //If data-framework matches on firstCard and target, add the matches class to each
  // A timeout of 1000ms is added to give sufficent time before the matched class appears
  //Disable/enable functions added around the timeout to prevent user clicking > 2 planets
  //j counts the number of times a match is made
  function matched() {
    disable();
    setTimeout(() => {
      firstCard.classList.add("matches");
      target.classList.add("matches");
      enable();
      j++;
      document.getElementById("pairCounter").innerHTML = j;
    }, 1000);
  }

  //Disable Function
  //Sets pointer events temporarily to none
  function disable() {
    const planetContainer = document.querySelectorAll(".planet");
    for (let i = 0; i < planetContainer.length; i++) {
      planetContainer[i].classList.add("disabled");
    }
  }

  //Enable Function
  //Removes the pointer event disabled function to allow play to continue
  function enable() {
    const planetContainer = document.querySelectorAll(".planet");
    for (let i = 0; i < planetContainer.length; i++) {
      if (planetContainer[i].className.search("matches") === -1) {
        planetContainer[i].classList.remove("disabled");
      }
    }
  }

  //Unmatched Function
  //If data-framework does not match,add the 'facedown' class to the planet
  // A timeout of 1000ms is added to give sufficent time to view the position of images
  function unmatched() {
    disable();
    setTimeout(() => {
      firstCard.classList.add("facedown");
      target.classList.add("facedown");
      enable();
    }, 2000);
  }
}

//Reset Function
//Resets all planets back to 'facedown' class at any point in the game
//Resets 'pairs' and 'clicks' counters back to 0
//Calls the Shuffled Planets function
function reset() {
  const planetContainer = document.querySelectorAll(".planet");
  for (let i = 0; i < planetContainer.length; i++) {
    planetContainer[i].classList.remove("matches");
    planetContainer[i].classList.add("facedown");
    planetContainer[i].classList.remove("disabled");
  }
  j = 0;
  document.getElementById("pairCounter").innerHTML = j;
  firstCard = 0;
  firstClick = true;
  k = 0;
  document.getElementById("Counter").innerHTML = k;
  shuffledPlanets();
}

//End Modal
//This is called when a player completes the game and finds 8 pairs
//Audio is added when modal is triggered
//Close button on modal also calls the reset function
function endModal() {
  setTimeout(() => {
    let gameModal = document.getElementById("endGameModal");
    gameModal.classList.add("modalshow");
    const endModalSound = document.getElementById("endsound");
    document.querySelector("modalshow");
    endModalSound.play();
    let closeButton = document.querySelector("#end-close-button");
    closeButton.addEventListener("click", function () {
      gameModal.classList.add("closed");
      addEventListener("click", reset());
    });
    gameModal.classList.remove("closed");
  }, 500);
}

//Start modal
//This is called whent the webpage is loaded
//Close button functionality added
//Enable class added following the closure of the modal to allow play to commence
function startModal() {
  let gameModal = document.getElementById("startGameModal");
  gameModal.classList.add("modalshow");
  let closeButton = document.querySelector("#start-close-button");
  closeButton.addEventListener("click", function () {
    gameModal.classList.toggle("closed");
    let gameSpaceEnable = document.getElementById("gamespace");
    gameSpaceEnable.classList.add("enabled");
  });
}
startModal();

//Nodelist of planets converts into array to allow shuffle to take place
let deck = gamespace.getElementsByClassName(".planet");

function nodeList(deck) {
  let arr = [];
  for (let planet of deck) {
    arr.push(planet);
  }
  return arr.slice();
}
//Shuffle Function
//Shuffle function utilises the Fisher-Yates method
//This allows for random placing of planets within divs in the gamespace.
//Logic obtained from StackOverflow.
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
//Shuffled Planets Function
//Once shuffle is complete, planets are displayed randomly
function shuffledPlanets() {
  const planetsToShuffle = document.querySelectorAll(".planet");
  let arrayOfPlanets = nodeList(planetsToShuffle);
  const gameSpace = document.querySelector("#gamespace");
  let shuffledPlanets = shuffle(arrayOfPlanets);
  for (let i = 0; i < shuffledPlanets.length; i++) {
    [].forEach.call(shuffledPlanets, function (shuffledPlanet) {
      gameSpace.appendChild(shuffledPlanet);
    });
  }
}
shuffledPlanets();
