//LOCAL STORAGE FOR THE GAME
//In order to develop the local storage we have to get the state, let's start with a test.
//import {state} from './basicTestStory'
// this will be added later localStorage.clear()

let timelineNaming = () => {
    //Check localStorage
}


let saveTimeline = () => {

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





