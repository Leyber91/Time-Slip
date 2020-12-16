//GAME PHASE 0
const scenarioToPresent = document.querySelector('#scenario');
const pathToChoose = document.querySelector('#optionPath');

//track what path we are
let state = {};
// making shure first time we start from zero
startJourney = () => {
    state = {}
    showWhereWeAre(1)

}
//to know which option we select

//Show where we are taking the textNode Index
showWhereWeAre = (pathNodeIndex) => {
    const pathNode = pathNodes.find(pathNode => pathNode.id === pathNodeIndex);
    scenarioToPresent.innerText = pathNode.text
    //Next we remove the other options we are not in
    while (pathToChoose.firstChild) {
        /// removing the default options
        pathToChoose.removeChild(pathToChoose.firstChild)
    }
// we want to check if the path can be displayed an create a button for each option
    pathNode.options.forEach(path => {
        // in case of being true, this options will execute
        if (selectedOptionKnower(path)) {
            console.log(path)
            const button = document.createElement('button')
            button.innerText = path.text
            button.className = 'button'
            // add an even listener to each generated button
            button.addEventListener('click', () => pickYourPath(path))
            pathToChoose.appendChild(button)


        }
    })
};

selectedOptionKnower = (path) => {
    console.log(path)
// if we don´t have any required state, or returns the actual state, due the fact that this function will return
// the boolean state of the function.
    return path.requiredState == null || path.requiredState(state)

};

// Pick the path you need
pickYourPath = (path) => {
    const nextPathNode = path.nextPath
    //Condition to reestart
    if (nextPathNode <= 0) {
        return startJourney()
    }
    //Will change the state to the one on setState. Updating the current and adding new ones
    state = Object.assign(state, path.setState)
    showWhereWeAre(nextPathNode)
}



//Defining the different story lines, later on it will be objects
const pathNodes = [
    {
        id: 1,
        text: 'You leave the Earth to go on a mission that may be crucial for the future',
        options: [
            {
                text: 'Start on ring world',
                setState: { timeStretches: true},
                nextPath: 2
            },
            {
                text: 'Start on big wave world',
                setState: { timeStretches: false},
                nextPath: 4
            }
        ]
    },
    {
        id: 2,
        text: 'You encounter a house next to a lake that seems from another time long past, you enter and you find a hatch open.',
        options: [
            {
                text: 'You enter the hatch',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.timeStretches,
                setState: { hatch: true, lake: false},
                nextPath: 4
            },
            {
                text: 'You go to swim on the lake',
                // After the first option passes, we must set the required to be displayed
                
                requiredState: (currentState) => currentState.timeStretches,
                setState: { hatch: false, lake: false},
                nextPath: 4
            },
        ]
    },
    {
        id: 4,
        text: 'Neither of the path had a happy ending, now you are lost in time but with a chance to return, take the futurama loop over',
        options: [
            {
                text: 'Big deep and  then big bang',
                // I put -1 so we identify id bigger than 0, otherwhise your are send back to starting screen
                nextPath: -1
            }
        ]
    },

]


//We put it at hte bottom to load once everything is loaded
startJourney();
