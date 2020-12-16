# Time-Slip
Story telling about time distortion

## BasicTestStory file explained
In order to accomplish basic logic functionality, nd initial story logic was created.
- An array of objects was created to simulate the different pages of the story telling, called pathNodes
- The text of the story page and the options are injected directly to the html.
    - For the text insertion we use showWhereWeAre
    - In the function showWhereWeAre we eliminate previous existing buttons
    - Once buttons previous existing are eliminated we created the new ones going through all the objects in the array object
    - Each generated button creates the eventListeneres

-once the button cliked the pickYoruPath function comes to play
    - a conditiion is added to restaeting the game in case of reaching the end point
    - the state that identifies the pecularities of your te¡imeline are identified in  state
    - The function takes from the object the nextText prperty and executes the WhowHere WeAre function, whcil will start the process again.

Selection option knower sends returns the current state, helpfull for the timlelinen continuum
