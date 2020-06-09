**## Testing**

Testing can be found in this file - LINK



**#### \**Functionality\****



**##### \**Browser compatibility\****



Test description and desired outcome -



 **Ensure that the site loads correctly on each of the following web browsers:**



\- **Chrome - Passed**

\- **Edge - Passed**

\- **Firefox - Passed**

\- **Safari - Passed**



**##### Code Validation**



\- [W3C Markup Validation](https://validator.w3.org/) 

\- [W3C CSS validation](https://jigsaw.w3.org/css-validator/) 

Links and Buttons have also all been tested and work correctly.



**#### \**Reach (responsiveness)\****



Test description and desired outcome -



Ensure that the site is responsive and loads correctly on each screen size using the chrome developer tools:



\- **Small devices - Passed**

\- **Medium devices - Passed**

\- **Large devices - Passed**

\- **x-Large devices - Passed**



**#### \**Features\****

***\* A start-game modal \****

- The start modal appears on loading the webpage of the game.

- It provides instructions as to how to play the game.

- Once the 'close' button is clicked, the game can begin.

  

***\* The 'Gamespace' with 16 cards \****

- There are 8 planets in the solar system which provide the images for the 16 cards available for play.
- The starting position of the cards is a facedown image (yellow with a rocket).  
- Once a card is clicked, a short audio sound plays and the image of the planet is revealed.
- Once a second card is clicked, the audio is played and the image is revealed.  
- Matching logic is called and if the images match, a blue starry background is revealed to demonstrate this.
- If the images do not match, the facedown images reappears on the cards.



***\*A 'Pairs' counter\****

- This counter records the number of pairs matched, up to a maximum of 8.
- This resets once the restart button has been clicked or the 'end modal' appears on screen.



***\*A 'Clicks' counter\****

- This counter records the number clicks that have taken place on the cards throughout the game.  It introduces an element of competitiveness as the player can try to 'beat' the number of clicks that it takes them to find all 8 matches.
- This resets once the restart button has been clicked or the 'End Modal' appears on screen.



***\* A restart button\****

- This button resets the game at any point, resetting both the 'Pairs' and 'Clicks' counter , allowing a new game to start.****



***\* An end-game modal \****

- The 'end modal' appears once 8 matches have been found and signifies the end of the game.
- The modal provides a congratulatory message with instructions as to how to play again.
- Once the 'close' button has been clicked, the reset logic (as per the restart button) is called. The game and counters are reset. 