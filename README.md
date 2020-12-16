# Time-Slip
Story telling about time distortion

## BasicTestStory file explained
In order to accomplish basic logic functionality, an initial story logic was created.
- An array of objects was created to simulate the different pages of the story telling, called pathNodes
- The text of the story page and the options are injected directly to the html.
    - For the text insertion we use showWhereWeAre
    - The function finds the node which we are first
    - In the function showWhereWeAre we eliminate previous existing buttons
    - Once buttons previous existing are eliminated we created the new ones going through all the objects in the array object
    - Each generated button creates the eventListeners

- Once the button is clicked the pickYourPath function comes to play
    - a condition is added to restart the game in case of reaching the end point
    - the state that identifies the peculiarities of your timeline are identified in  state
    - The function takes from the object the nextText property and executes the ShowWhereWeAre function, which will start the process again.

Selection option knower sends returns the current state, helpfull for the timeline continuum
