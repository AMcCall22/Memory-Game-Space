//Initialise variables
let firstCard = 0;
let firstClick = true;
let pairCount = 0;
let clickCount = 0;

//OnCardClicked Function
//Replaces the facedown(rocket)image with the planet image
//Onmousedown ="onCardClicked(event)" added to each planet div in index.html
//Checks whether planet is first or second clicked
//Stores first planet or checks matching logic for second planet
function onCardClicked(planet) {
    let target = planet.currentTarget;
    target.className = target.className.replace("facedown", "");

    //Add audio when planet is clicked
    const mySound = document.getElementById("sound");
    document.querySelector("planet");
    mySound.currentTime = 0;
    mySound.play();

    //Counter provides total number of clicks per game
    clickCount++;
    document.getElementById("Counter").innerHTML = clickCount;

    //Main Conditional
    //Checks logic to determine whether planet is first or second clicked
    //Checks for a match for each planet image, matching on "data-framework"
    //Points to matched or unmatched function

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
            if (pairCount > 6) {
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
    //PairCount counts the number of times a match(pair) is made
    function matched() {
        disablePointer();
        setTimeout(() => {
            firstCard.classList.add("matches");
            target.classList.add("matches");
            enablePointer();
            pairCount++;
            document.getElementById("pairCounter").innerHTML = pairCount;
        }, 1000);
    }

    //Disable Function
    //Sets pointer events temporarily to none
    function disablePointer() {
        const planetContainer = document.querySelectorAll(".planet");
        for (let i = 0; i < planetContainer.length; i++) {
            planetContainer[i].classList.add("disabled");
        }
    }

    //Enable Function
    //Removes the pointer event disabled function to allow play to continue
    function enablePointer() {
        const planetContainer = document.querySelectorAll(".planet");
        for (let i = 0; i < planetContainer.length; i++) {
            if (planetContainer[i].className.search("matches") === -1) {
                planetContainer[i].classList.remove("disabled");
            }
        }
    }

    //Unmatched Function
    //If data-framework does not match, add 'facedown' class to planet
    //Adds a timeout of 1000ms to give sufficent time to view the position of images
    function unmatched() {
        disablePointer();
        setTimeout(() => {
            firstCard.classList.add("facedown");
            target.classList.add("facedown");
            enablePointer();
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
    pairCount = 0;
    document.getElementById("pairCounter").innerHTML = pairCount;
    firstCard = 0;
    firstClick = true;
    clickCount = 0;
    document.getElementById("Counter").innerHTML = clickCount;
    shufflePlanets();
}

//End Modal Function
//Call function when a player completes the game and finds 8 pairs
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
        closeButton.addEventListener("click", function() {
            gameModal.classList.add("closed");
            addEventListener("click", reset());
        });
        gameModal.classList.remove("closed");
    }, 500);
}

//Start Modal Function
//Call function when webpage is loaded
//Close button functionality added
//Enabled class added following modal closure to allow play to commence
function startModal() {
    let gameModal = document.getElementById("startGameModal");
    gameModal.classList.add("modalshow");
    let closeButton = document.querySelector("#start-close-button");
    closeButton.addEventListener("click", function() {
        gameModal.classList.toggle("closed");
        let gameSpaceEnable = document.getElementById("gameSpace");
        gameSpaceEnable.classList.add("enabled");
    });
}
startModal();

//Nodelist of planets converts into array to allow shuffle to take place
let deck = gameSpace.getElementsByClassName(".planet");

function nodeList(deck) {
    let arr = [];
    for (let planet of deck) {
        arr.push(planet);
    }
    return arr.slice();
}

//Shuffle Function
//Shuffle function utilises the Fisher-Yates method(further detail in README)
//Allows random placing of planets within divs in the gamespace
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//Shuffled Planets Function
//Collects all planets for shuffle function
//Calls shuffle function
//Once shuffle is complete, append planets back into the game
//Logic borrowed and amended - https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript
function shufflePlanets() {
    const planetsToShuffle = document.querySelectorAll(".planet");
    let arrayOfPlanets = nodeList(planetsToShuffle);
    const gameSpace = document.querySelector("#gameSpace");
    let shufflePlanets = shuffle(arrayOfPlanets);
    for (let i = 0; i < shufflePlanets.length; i++) {
        [].forEach.call(shufflePlanets, function(shuffledPlanet) {
            gameSpace.appendChild(shuffledPlanet);
        });
    }
}
shufflePlanets();