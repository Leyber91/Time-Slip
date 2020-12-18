//LOCAL STORAGE FOR THE GAME
//In order to develop the local storage we have to get the state, let's start with a test.
//import {state} from './basicTestStory'
// this will be added later localStorage.clear()
let saveTimeline = () => {
const TimelineRebootTimes = {reboots: restartTimelineCount};
Object.assign(state , TimelineRebootTimes)

console.log(state)
const currentState = JSON.stringify(state);
console.log(currentState)
console.log(localStorage.length)
//console.log(state)
// Time line name
const timeLineName = 'Timeline ' + localStorage.length
console.log (timeLineName)
// Time line 1
localStorage.setItem(timeLineName, currentState)
console.log(localStorage)
//I define which Time Line I will select
let getTimeline = localStorage.getItem('Timeline 0')
//returns the stored time
let convertTime = JSON.parse(getTimeline)
///Returns time line on the console
console.log(convertTime)
console.log(localStorage.length)
}

// This following function is created to classify the different timelines
let timelineClassifier = (object) => {
    
}


//function to fill out the score panel
let timeLinesHistory = () => {
    let historyBox = document.getElementById('optionPath')
    for (let i = 0; i < localStorage.length ; i++){
        let timelineName = localStorage.key(i)
        let timeline = localStorage.getItem(timelineName)
        //HERE WE DISSECT THE TIME LINE
        let dissectedTimeline = JSON.parse(timeline)
        
        //First we copy the values for TimeMachine and Reboot
        let timeMachineUse = dissectedTimeline.timeForwardMachine //Time machine use
        let timeReboots = dissectedTimeline.reboots //Times rebooted, to be used

        //Now I clean the time from the timeLine loop and the timeMachine
        delete dissectedTimeline.timeForwardMachine
        delete dissectedTimeline.reboots

        //A check is done to ensure all was carried as planned
        console.log(dissectedTimeline)
        console.log(timeMachineUse)
        console.log(timeReboots)
        //Now deleted we can proceed with the timeline path analysis

        
        const entry = document.createElement('button')
        entry.className = 'button'
        entry.innerHTML = timelineName + ' ' + timeline
        historyBox.appendChild(entry)
    }
}







