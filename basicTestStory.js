//GAME PHASE 0
const scenarioToPresent = document.querySelector('#scenario');
const pathToChoose = document.querySelector('#optionPath');

//track what path we are
let state = {};
//times timeline srestarted added
let restartTimelineCount = 0;
// making sure first time we start from zero
let startJourney = () => {
    console.log(state)
    //condition once a game is started
        if (state.timeForwardMachine){
            console.log('you made it through time')
            restartTimelineCount++  //add each time restarted
            }
    state = {}
    console.log(restartTimelineCount)
    storyPageLoader(1)
    console.log(state)
    }
//to know which option we select

//Show where we are taking the textNode Index
storyPageLoader = (pageIndex) => {
    // At this point I set the constant to get the ide of the page
    // The find() method returns the value of the first element in the
    // provided array that satisfies the provided testing function
    const pathNode = storyLines.find(identifier => identifier.id === pageIndex);
    //pathNode is a representation of the selected element, we are now in the object we work with
    //Here I set the text from the node
    scenarioToPresent.innerText = pathNode.text
    //Next we remove the other options we are not in
    while (pathToChoose.firstChild) {
        /// removing the default options
        pathToChoose.removeChild(pathToChoose.firstChild)
    }
// we want to check if the path can be displayed an create a button for each option
    pathNode.options.forEach(option => {
        // in case of being true, this options will execute, if required State is false, will not.
        if (whatOptionsCanBeDisplayedSelector(option)) {
//            console.log(path)
            const button = document.createElement('button')
            button.innerText = option.text
            button.className = 'button'
            // add an even listener to each generated button
            button.addEventListener('click', () => pickYourPath(option))
            //append the options I have
            pathToChoose.appendChild(button)


        }
    })
};
// This serves me to return a bollean
whatOptionsCanBeDisplayedSelector = (page) => {
//    console.log(path)
    console.log(state)
// if we don´t have any required state, or returns the actual state, due the fact that this function will return
// the boolean state of the function.
    return page.requiredState == null || page.requiredState(state)

};

// Pick the path you need
pickYourPath = (path) => {
    const nextPathNode = path.nextPath
    //Condition to re-start and saved completed timeline
    if (nextPathNode <= 0) {
        state = Object.assign(state, path.setState)
        saveTimeline()
        return startJourney()
    }
    //Will change the state to the one on setState. Updating the current and adding new ones
    state = Object.assign(state, path.setState) // here es when we assign the new state
    storyPageLoader(nextPathNode)
}



