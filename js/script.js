//Initialise variables.

let firstCard = 0;
let i = 0;

//Create onCardClicked function to replace the facedown(rocket) image with the planet image.
//onclick ="onCardClicked(event)" added to each planet div in index.html.
//Reassign target to the card just clicked then increment i.
function onCardClicked(planet) {
  let target = planet.currentTarget;
  target.className = target.className.replace("facedown", "");
  i++;

  //Check for a match for each planet element, matching on "data-framework".
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
    } else {
      console.log("has not been matched");
      unmatched();
    }
  }

  //Matched function
  //Add the matches class to the firstCard and target, within a timeout of 2000ms
  //Count the number of times a match is made
  function matched() {
    console.log("match function");
    disable();
    setTimeout(() => {
      firstCard.classList.add("matches");
      target.classList.add("matches");
      enable();
    }, 2000);
  }

  //disable
  function disable() {
    console.log("disable function");
    console.log("--->  i is" + i);
    const allPlanets = document.querySelectorAll(".planet");
    for (let i = 0; i < allPlanets.length; i++) {
      console.log("planet: ", allPlanets[i]);
      allPlanets[i].classList.add("disabled");
    }
    console.log("--->  i is" + i);
  }

  //enable
  function enable() {
    console.log("enable function");
    console.log("--->  i is" + i);
    const allPlanets = document.querySelectorAll(".planet");
    for (let i = 0; i < allPlanets.length; i++) {
      console.log("planet: ", allPlanets[i]);
      allPlanets[i].classList.remove("disabled");
    }
    console.log("--->  i is" + i);
  }

  //Unmatched function
  function unmatched() {
    console.log("nomatch function");
    disable();
    setTimeout(() => {
      firstCard.classList.add("facedown");
      target.classList.add("facedown");
      enable();
    }, 2000);
  }
}
