## Testing

### Functionality



#### Start-game modal

###### Test Description 

Ensure correct loading of modal and correct game initiation.

###### Expected Outcome 

Modal appears on loading the webpage of the game.  Once the 'close' button is clicked, the game begins.

###### Pass/Fail

Pass



#### Gamespace

###### Test Description 

Ensure Gamespace loads correctly for game to be played.

###### Expected Outcome 

The starting position of the cards is a facedown image. 

On each card click, a short audio sound plays and the image of the planet is revealed.  

Matching logic is called and if the images match, a blue starry background is revealed to demonstrate this.

Only 2 cards can be clicked before matching checks are made.

If the images do not match, the facedown images reappears on the cards.

###### Pass/Fail 

Pass

 

#### Pairs counter

###### Test Description 

Ensure correct counting of card matches made.

###### Expected Outcome 

Correctly record the number of pairs matched, up to a maximum of 8.

Counter resets once the restart button has been clicked or the 'end modal' appears on screen.

###### Pass/Fail

Pass



#### Clicks counter

###### Test Description 

Ensure correct counting of clicks made.

###### Expected Outcome 

Correctly record the number of card clicks made throughout the game.

Counter resets once the restart button has been clicked or the 'end modal' appears on screen.

###### Pass/Fail

Pass



#### Restart button

###### Test Description 

Ensure restart button is functioning correctly

###### Expected Outcome 

Resets the game at any point by clicking i.e all cards to return to 'facedown' position.

Reset both the 'Pairs' and 'Clicks' counter , allowing a new game to start.

###### Pass/Fail

Pass

 

#### End-game modal

###### Test Description 

Ensure correct loading of modal and correct game completion.

###### Expected Outcome 

Modal triggers once 8 matches have been found.

Audio plays on modal trigger.

Once the 'close' button has been clicked, the reset logic (as per the restart button) is called. The game and counters are reset. 

###### Pass/Fail

Pass



### Browser compatibility



Ensure that the site loads correctly on each of the following web browsers

- Chrome - Passed
- Edge - Passed
- Firefox - Passed
- Safari - Passed



#### Code Validation

The code has been passed through the following validation tools:

\- [W3C Markup Validation](https://validator.w3.org/)  - Document checking completed. No errors or warnings to show

\- [W3C CSS validation](https://jigsaw.w3.org/css-validator/)  - No errors found. The following 5 warnings were raised but these do not affect the functionality of the game.

![image-20200610105410902](C:\Users\aliso\AppData\Roaming\Typora\typora-user-images\image-20200610105410902.png)



#### Responsiveness

Ensure that the site is responsive and loads correctly on each screen size using the chrome developer tools:

- Small devices - Passed
- Medium devices - Passed
- Large devices - Passed
- x-Large devices - Passed



#### Further testing

Chrome developer tools was used throughout the entirety of the project.

Family and friends have also tested the game for user experience and to aid mobile responsiveness testing.

