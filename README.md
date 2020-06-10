## **Alison McCallum - Space Memory Game**



### **Milestone 2 - Interactive Front End Development** 

I have chosen to create a memory card came based on the planets of our solar system.  My 4 year old son is currently obsessed with Space and I wanted to create an enjoyable, relevant game for him and his friends.

The game is based on a simple memory game of matching 8 pairs of planets images to win.  The game can be played over and over again, providing the player the chance to reduce the number of 'clicks' it takes them to find all 8 pairs.

#### **Mock Up images**



#### **UX**



##### **User Stories**



"As a **parent** of young children, I would like to see the following:

- A clear and intuitive design that is easy for my child to follow
- Clear instructions as to how to play the game and also how the game ends
- A method to restart the game if necessary



"As a **young child** (around 4-8 years old), I would like to see the following:

- A fun concept which provides an element of competition 

- A game I can play over and over again
- A clear and intuitive design that is easy for to follow
- Clear instructions as to how to play the game and also how the game ends
- A method to restart the game if necessary



#### **Wireframes**



Link to [Wireframes](/Wireframes/Space_Memory_Gamepdf)



#### **Features**



The game is played on 1 screen which includes the following features:

##### A start-game modal 

- The start modal appears on loading the webpage of the game.

- It provides instructions as to how to play the game.

- Once the 'close' button is clicked, the game can begin.

  

##### The 'Gamespace' with 16 cards

- There are 8 planets in the solar system which provide the images for the 16 cards available for play.
- The starting position of the cards is a facedown image (yellow with a rocket).  
- Once a card is clicked, a short audio sound plays and the image of the planet is revealed.
- Once a second card is clicked, the audio is played and the image is revealed.  
- Matching logic is called and if the images match, a blue starry background is revealed to demonstrate this.
- If the images do not match, the facedown images reappears on the cards.



##### A 'Pairs' counter

- This counter records the number of pairs matched, up to a maximum of 8.
- This resets once the restart button has been clicked or the 'end modal' appears on screen.



##### A 'Clicks' counter

- This counter records the number clicks that have taken place on the cards throughout the game.  It introduces an element of competitiveness as the player can try to 'beat' the number of clicks that it takes them to find all 8 matches.
- This resets once the restart button has been clicked or the 'End Modal' appears on screen.



##### A restart button

- This button resets the game at any point, resetting both the 'Pairs' and 'Clicks' counter , allowing a new game to start.



##### An end-game modal

- The 'end modal' appears once 8 matches have been found and signifies the end of the game.
- The modal provides a congratulatory message with instructions as to how to play again.
- Once the 'close' button has been clicked, the reset logic (as per the restart button) is called. The game and counters are reset. 



#### **Features for future implementation**

- A second level with more cards will create a more complex game and appeal to a wider audience. 

- Currently, the game has a pairs counter and a click counter.  A  further enhancement would be a mechanism for logging a high score to encourage repeat players.

- Further audio could be added to improve the overall player experience. This could include background music as well as other audio clips on the close button etc. 

  

**Technologies Used** 

\- HTML

\- CSS

\- Javascript

\- Bootstrap 4

\- Balsamiq

\- Github/Gitpod

\- Font Awesome

\- Google Fonts

\- Unicorn Revealer (https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln)



**Issues faced and resolved**

- There was a dealy on the audio sound on clicking the planets.  This was resolved....
- Media queries were added in to compensate for any issues faced on mobile view.  These mainly include the planet div height max-width, as well as the modal sizes.
- The hover class added to the planet div became 'sticky' on mobile screens.  To compensate, a media query with a white border was added  which resolved the issue
- The background image with background colour on mobile view was delayed on loading.  This proved complex to resolve, and the end result is the loading of the images within the start modal without being displayed. This acts as a 'preload' and has resolved the issue.



**Deployment**



The GitHub repository for this site is located [here](https://github.com/AMcCall22/Memory-Game-Space).

In order to deploy my site to GitHub Pages the following steps were taken:

1. From the menu items near the top of the page, select ***\*Settings\****.

2. Scroll down to the ***\*GitHub Pages\**** section.

3. Under ***\*Source\**** click the drop-down menu labelled ***\*None\**** and select ***\*Master Branch\****.

4. On selecting Master Branch the page is automatically refreshed and the website is now deployed.

5. Scroll back down to the ***\*GitHub Pages\**** section to retrieve the link to the deployed website.



Deployed website - https://amccall22.github.io/Memory-Game-Space

To ***\*clone\**** this project from Github, please follow the steps below:

1. Navigate to the correct repository - [here](https://github.com/AMcCall22/Memory-Game-Space).

2. Click the green button - 'Clone or Download'.

3. Copy the clone URL that appears - https://amccall22.github.io/Memory-Game-Space

4. Change the current working directory to the location where you want the cloned directory to be made.

5. Type 'git clone' and paste the URL you copied in Step 3.

6. Press Enter to created your local clone.





### Credits

#### **Content**

##### Memory Game coding inspiration

https://www.youtube.com/watch?v=bbb9dZotsOc

https://marina-ferreira.github.io/tutorials/js/memory-game/

https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript

https://codeburst.io/how-to-make-a-dragon-ball-memory-game-part-2-5659ff2ee0b9

##### **General**

https://www.w3schools.com/

https://css-tricks.com/considerations-styling-modal/



#### **Media**

**Images**

- Yellow Rocket - https://pixabay.com/illustrations/rocket-space-spaceman-2887845/  Image by <a href="https://pixabay.com/users/JPhillips4-6689100/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2887845">JPhillips4</a> 
- Blue Stars - https://www.kindpng.com/free/white-star/ 
- Planet Images - https://images.nasa.gov/



**Audio**

- bing.wav - http://soundbible.com/1636-Power-Up-Ray.html 
- drip.wav - https://www.audiomicro.com/free-sound-effects/free-cartoons-and-comic-effects/sort:Track.length/direction:asc 



**Acknowledgements**



Thanks to my mentor, Brian Macharia for his input and direction.



Thanks also to my husband, Peter McCallum for his support and patience throughout this project. 



\------



Disclaimer



This site is currently for educational and personal use only.