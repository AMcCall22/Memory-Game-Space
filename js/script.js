//Initialise variables.

let firstCard = null;
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
  } else {
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
    i = 0;
  }

  //Matched function
  function matched() {
    console.log("match");
    setTimeout(() => {
      firstCard.classList.add("matches");
      target.classList.add("matches");
    }, 2000);
    firstCard.matches = 0;
  }

  //Action to take on an un-matched pair - replace with facedown class. Allow me to keep playing.
    function unmatched() {
      console.log("nomatch");
      setTimeout(() => {
        firstCard.classList.add("facedown");
        target.classList.add("facedown");
      }, 2000);
    }
  }


