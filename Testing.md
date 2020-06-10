## Testing

### Functionality



1. #### Start-game modal

2. ###### Test Description 

3. Ensure correct loading of modal and correct game initiation.

4. ###### Expected Outcome 

5. Modal appears on loading the webpage of the game.  Once the 'close' button is clicked, the game begins.

6. ###### Pass/Fail

7. Pass

8. 

9. #### Gamespace

10. ###### Test Description 

11. Ensure Gamespace loads correctly for game to be played.

12. ###### Expected Outcome 

13. The starting position of the cards is a facedown image. 

14. On each card click, a short audio sound plays and the image of the planet is revealed.  

15. Matching logic is called and if the images match, a blue starry background is revealed to demonstrate this.

16. Only 2 cards can be clicked before matching checks are made.

17. If the images do not match, the facedown images reappears on the cards.

18. ###### Pass/Fail 

19. Pass

20. 

21. #### Pairs counter

22. ###### Test Description 

23. Ensure correct counting of card matches made.

24. ###### Expected Outcome 

25. Correctly record the number of pairs matched, up to a maximum of 8.

26. Counter resets once the restart button has been clicked or the 'end modal' appears on screen.

27. ###### Pass/Fail

28. Pass

29. 

30. #### Clicks counter

31. ###### Test Description 

32. Ensure correct counting of clicks made.

33. ###### Expected Outcome 

34. Correctly record the number of card clicks made throughout the game.

35. Counter resets once the restart button has been clicked or the 'end modal' appears on screen.

36. ###### Pass/Fail

37. Pass

38. 

39. #### Restart button

40. ###### Test Description 

41. Ensure restart button is functioning correctly

42. ###### Expected Outcome 

43. Resets the game at any point by clicking i.e all cards to return to 'facedown' position.

44. Reset both the 'Pairs' and 'Clicks' counter , allowing a new game to start.

45. ###### Pass/Fail

46. Pass

47. 

48. #### End-game modal

49. ###### Test Description 

50. Ensure correct loading of modal and correct game completion.

51. ###### Expected Outcome 

52. Modal triggers once 8 matches have been found.

53. Audio plays on modal trigger.

54. Once the 'close' button has been clicked, the reset logic (as per the restart button) is called. The game and counters are reset. 

55. ###### Pass/Fail

56. Pass

57. 

### Browser compatibility

- 

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

