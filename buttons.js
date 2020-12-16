
// Creation of the home page buttons and the story buttons
// Go Home page buttons
let homePageButtons = () =>{
    let scenario = document.querySelector('#scenario');
    let optionPath = document.querySelector('#optionPath');
    let container = document.querySelector('.container')

    while(scenario.firstChild){
        scenario.removeChild(scenario.firstChild)
    }
    while(optionPath.firstChild){
        optionPath.removeChild(optionPath.firstChild)
    }
    let footer = document.querySelector('#controler')
    while(footer.firstChild){
        footer.removeChild(footer.firstChild)
    }
    container.className = 'elementHidden'


    const button = document.createElement('button')
    button.innerText = 'START'
    button.className = 'button controllerButton'
    button.addEventListener('click', () => storyPageButton())
    footer.appendChild(button);
}


//Story page button
let storyPageButton = () =>{
    let terminal = document.querySelector('.terminalScreen')
    let footer = document.querySelector('#controler')
    let container = document.querySelector('.elementHidden')
    container.className = 'container'

    while(footer.firstChild){
        footer.removeChild(footer.firstChild)
    }
/*
// Generate the content of the story page
// Generate the div nodes
const container = document.createElement('div')
const scenario = document.createElement('div')
const optionPath = document.createElement('div')

// Generate the div nodes
container.className = 'container'
scenario.id = 'scenario'
optionPath.id = 'optionPath'
optionPath.className = 'button-flex-box'

// Append the content to the section
terminal.appendChild(container)
let parent__container = document.querySelector('.container')
parent__container.appendChild(scenario)
parent__container.appendChild(optionPath)



// END GENERATING CONTENT
*/
startJourney()
    const button = document.createElement('button')
    button.innerText = 'FINISH TIMELINE'
    button.className = 'button controllerButton'
    button.addEventListener('click', () => homePageButtons())


    footer.appendChild(button);
}

//Story page button
let scorePagebutton = () =>{
    let footer = document.querySelector('#controler')
    const button = document.createElement('button')
    button.innerText = 'GO HOME'
    button.className = 'button'
    button.addEventListener('click', () => homePageButtons())
}

homePageButtons()