//Initialise variables.

let clickedCard = null;
let i = 0;

//Create onCardClicked function to replace the facedown(rocket) image with the planet image.
//onclick ="onCardClicked(event)" added to each planet div in index.html.
function onCardClicked(planet) {
  let target = planet.currentTarget;
  target.className = target.className.replace("facedown", "");
  i++;
}
