//Defining the different story lines, later on it will be objects
const storyLines = [
    {
        id: 1,
        // In the middle of the 23rd century, humanity has reached until the outter most region of the Solary System,
        text: 'In Plutos\'s moon, Charonte, you proceed to go through a mission to a place no one expected, before starting to journey, you have to pick a ship, it will determine what you can do',
        options: [
            {
                text: 'Pick a good heat Shield. The Core movie',
                setState: { heatShield: true, epsteinDrive: false, tankFull: true},
                nextPath: 2
            },
            {
                text: 'Pick a long range with medium shield. No strong heat',
                setState: { heatShield: false, epsteinDrive: true, tankFull: true},
                nextPath: 2
            },
            {
                text: 'New long range and heat resistant',
                requiredState: () => {
                    if (restartTimelineCount > 0){
                        return true
                    } else {
                        return false
                    }
            },
                setState: { heatShield: true, epsteinDrive: true, tankFull: true},
                nextPath: 2
            }
        ]
    },
    {
        id: 2,
        text: 'A bast system unravels before your eyes, a binary blackHole-star system with 8 planets, defying all laws of physics. There three main parts, the inner planets, the ones in the middle and the outer system, and due to your ship choice, the following planets are within reach:',
        options: [
            {
                text: 'Hell Eternum',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.heatShield && currentState.tankFull,
                //Here we set the three types of time dilation
                setState: { timeDilation: true, hellEternum : true},
                nextPath: 3
            },
            {
                text: 'Wave World',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.heatShield && currentState.tankFull,
                //Here we set the three types of time dilation
                setState: { timeDilation: 3, waveWorld : true},
                nextPath: 200
            },
            {
                text: 'Mountain World', //think to change it
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.heatShield && currentState.tankFull,
                //Here we set the three types of time dilation
                setState: { timeDilation: 3, mountainWorld : true},
                nextPath: 200
            },
            {
                text: 'Gate moon',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.heatShield || currentState.epsteinDrive,
                //Here we set the three types of time dilation
                setState: { timeDilation: 2, gateMoon : true},
                nextPath: 200
            },
            {
                text: 'Binary worlds',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.epsteinDrive && currentState.tankFull,
                //Here we set the three types of time dilation
                setState: { timeDilation: 2, binaryWorlds : true},
                nextPath: 200
            },
            {
                text: 'Ring World',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.epsteinDrive && currentState.tankFull,
                //Here we set the three types of time dilation
                setState: { timeDilation: 1, ringWorld : true},
                nextPath: 200
            },
            {
                text: 'Ultima mundi',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) =>currentState.epsteinDrive && currentState.tankFull,
                //Here we set the three types of time dilation
                setState: { timeDilation: 1, ultimaMundi : true},
                nextPath: 200
            }
        ]
    },
    // HELL WORLD STORY LINE
    {
        id: 3,
        text: 'You travel to the closest planet of the system to the Black Hole and its star, thanks to the heat shield you picked, you are able to travel in here, temperatures are hellish, but time distortion is even worse, spending one second here is 1hour of earthtTime',
        options: [
            {
                text: 'Descend to the Hellscape',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.hellEternum,
                //Here we set the three types of time dilation
                setState: { planetDescend : true, tankFull: false},
                nextPath: 4
            },
            {
                text: 'Return to the point of origin',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.heatShield,
                //Here we set the three types of time dilation
                setState: { planetDescend : false, tankFull: false},
                nextPath: 2
            }
        ]
    },
    // DESCEND THE CURSED PLANED
    {
        id: 4,
        text: 'You descended to the law-physics defying world, your ships detects an area of the planet where temperature let\'s you to be outside the ship with a spaceSuit, once you get out, you see a path that leads up to a portal, what do you bring with you?',
        options: [
            {
                text: 'My grand-dad silver medal',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.planetDescend,
                //Here we set the three types of time dilation
                setState: { metal: false, silver:true },
                nextPath: 5
            },
            {
                text: 'My mum\'s service metal medals',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.planetDescend,
                //Here we set the three types of time dilation
                setState: { metal: true, silver:false},
                nextPath: 5
            }
        ]
    },
    //PORTAL WHERE ALL THE CIRCLES ARE
    {
        id: 5,
        text: 'You arrive to the portal, once you cross it, you are transported to an empty space and suddenly an orb-type shapeless entity appears in front of you, somehow you can understand it, it makes you know that exists an artifact in the very center of the world that has the ability to bring new advance and prosperity to your world, nonetheless many challenges have to be surpassed',
        options: [
            //HELL VESTIBULE OPTION
            {
                text: 'Lasciate ogne speranza, voi ch\'intrate',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.metal || currentState.silver,
                //Here we set the three types of time dilation
                setState: { hellVestibule:true},
                nextPath: 6
            },
            //LIMBO OPTION
            {
                text: 'The guiltless damned',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.silver || currentState.hellVestibule,
                //Here we set the three types of time dilation
                setState: { limbo: true , hellVestibule:true},
                nextPath: 7
            },
            //LUST OPTION
            {
                text: 'As the lovers drifted into self-indulgence and were carried away by their passions, so now they drift for ever.',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo,
                //Here we set the three types of time dilation
                setState: { lust: true},
                nextPath: 8
            },
            //GLUTTONY OPTION
            {
                text: 'A great storm of putrefaction.',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo && currentState.lust,
                //Here we set the three types of time dilation
                setState: { gluttony: true},
                nextPath: 9
            },
            //GREED OPTION
            {
                text: 'House of Plutus',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo && currentState.lust && currentState.gluttony,
                //Here we set the three types of time dilation
                setState: { greed: true},
                nextPath: 10
            },
            //ANGER OPTION
            {
                text: 'A black sulkiness which can find no joy in God or man or the universe',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo && currentState.lust && currentState.gluttony && currentState.greed,
                //Here we set the three types of time dilation
                setState: { anger: true},
                nextPath: 11
            },
            //HERESY OPTION
            {
                text: 'The soul dies with the body',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo && currentState.lust && currentState.gluttony && currentState.greed && currentState.anger,
                //Here we set the three types of time dilation
                setState: { heresy: true},
                nextPath: 12
            },
            //VIOLENCE OPTION
            {
                text: 'Against Neighbors, Against Self and Against God, Art and Nature',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo && currentState.lust && currentState.gluttony && currentState.greed && currentState.anger && currentState.heresy,
                //Here we set the three types of time dilation
                setState: { violence: true},
                nextPath: 13
            },
            //FRAUD OPTION
            {
                text: 'City in corruption',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo && currentState.lust && currentState.gluttony && currentState.greed && currentState.anger && currentState.heresy && currentState.violence,
                //Here we set the three types of time dilation
                setState: { fraud: true},
                nextPath: 14
            },
            //TREACHERY OPTION
            {
                text: 'Traitors, Betrayers and Oathbreakers',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo && currentState.lust && currentState.gluttony && currentState.greed && currentState.anger && currentState.heresy && currentState.violence && currentState.fraud,
                //Here we set the three types of time dilation
                setState: { treachery: true},
                nextPath: 15
            },
            //CENTER OF HELL OPTION
            {
                text: 'One red, one pale and one black',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo && currentState.lust && currentState.gluttony && currentState.greed && currentState.anger && currentState.heresy && currentState.violence && currentState.fraud && currentState.treachery,
                //Here we set the three types of time dilation
                setState: { centerOfHell: true},
                nextPath: 16
            }
        ]
    },
    //NOW THE PATHS FOR THE CIRCLES OF HELL
    //HELL VESTIBULE
    {
        id: 6,
        text: 'Lasciate ogne speranza, voi ch\'intrate \n  "Abandon all hope, ye who enter here" ',
        options: [
            {
                text: 'You took no side, nor you could advance',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                //Here we set the three types of time dilation
                setState: { hellVestibule:false},
                nextPath: 5
            },
            {
                text: 'Take the Archeron River.',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                //Here we set the three types of time dilation
                setState: { limbo: true},
                nextPath: 7
            }
        ]
    },
    
    //LIMBO
    {
        id: 7,
        text: 'They could not, that is, choose Christ; \n they could, and did, choose human virtue, \n and for that they have their reward.',
        options: [
            {
                text: 'Share your thoughts with philosophers and go back',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.hellVestibule,
                //Here we set the three types of time dilation
                setState: { limbo:false},
                nextPath: 6
            },
            {
                text: 'Ignore the great thinkers, proceed your quest',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.hellVestibule,
                //Here we set the three types of time dilation
                setState: { limbo: true},
                nextPath: 8
            },
            {
                text: 'Advance and go Back to where the portal is',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.hellVestibule,
                //Here we set the three types of time dilation
                setState: { limbo:true},
                nextPath: 5
            },
        ]
    },

    //LUST
    {
        id: 8,
        text: 'Love, which in gentlest hearts will soonest bloom \n, seized my lover with passion for that sweet body \n from which I was torn unshriven to my doom. \n Love, which permits no loved one not to love, \n took me so strongly with delight in him, \n that we are one in Hell, as we were above. \n Love led us to one death. In the depths of Hell \n Caïna waits for him who took our lives.',
        options: [
            {
                text: 'Have fun with the "carnal Malefactors"',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo,
                setState: { lust:false},
                nextPath: 7
            },
            {
                text: 'Pass through the ruined slope',
                // After the fisst option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo,
                setState: { lust: true},
                nextPath: 9
            },
            {
                text: 'Pass the ruined slope and go back to the portal',
                // After the first option passes, we must set the required to be displayed
                // with required state if the option is false, the options wil not show up
                requiredState: (currentState) => currentState.limbo,
                setState: { lust:true},
                nextPath: 5
            },
        ]
    },

    //GLUTTONY
    {
        id: 9,
        text: 'Cerberus, the monstrous three-headed beast of Hell, ravenously guards the gluttons lying in the freezing mire, mauling and flaying them with his claws as they howl like dogs.',
        options: [
            {
                text: 'Grovel in the mud',
                // This choice sends you back
                requiredState: (currentState) => currentState.lust,
                setState: { gluttony:false},
                nextPath: 8
            },
            {
                text: 'Fill its three mouths with mud',
                // This choice moves you forward
                requiredState: (currentState) => currentState.lust,
                setState: { gluttony: true},
                nextPath: 10
            },
            {
                text: 'Beat the monster go back to the portal',
                // This choice saves your progress and let you go back to the portal room
                requiredState: (currentState) => currentState.lust,
                setState: { gluttony:true},
                nextPath: 5
            },
        ]
    },

    //GREED
    {
        id: 10,
        text: 'Here, too, I saw a nation of lost souls, \n far more than were above: they strained their chests \n against enormous weights, and with mad howls \n rolled them at one another. Then in haste \n they rolled them back, one party shouting out: \n"Why do you hoard?" and the other: "Why do you waste?',
        options: [
            {
                text: 'Join a clan, hoard and squander',
                // This choice sends you back
                requiredState: (currentState) => currentState.gluttony,
                setState: { greed: false},
                nextPath: 9
            },
            {
                text: 'Ignore both groups',
                // This choice moves you forward
                requiredState: (currentState) => currentState.gluttony,
                setState: { greed: true},
                nextPath: 11
            },
            {
                text: 'Go passed the clans and back to the portal',
                // This choice saves your progress and let you go back to the portal room
                requiredState: (currentState) => currentState.gluttony,
                setState: { greed: true},
                nextPath: 5
            },
        ]
    },

    //ANGER
    {
        id: 11,
        text: 'That which had its tender and romantic beginnings in the dalliance of indulged passion',
        options: [
            {
                text: 'Join the wrathful souls',
                // This choice sends you back
                requiredState: (currentState) => currentState.greed,
                setState: { anger: false},
                nextPath: 10
            },
            {
                text: 'Face your sins',
                // This choice moves you forward
                requiredState: (currentState) => currentState.greed,
                setState: { anger: true},
                nextPath: 12
            },
            {
                text: 'Take a pause after facing yourself',
                // This choice saves your progress and let you go back to the portal room
                requiredState: (currentState) => currentState.greed,
                setState: { anger: true},
                nextPath: 5
            },
        ]
    },

    //HERESY
    {
        id: 12,
        text: 'When "the portal of the future has been shut". it will no longer be possible for them to know anything',
        options: [
            {
                text: 'Shut future\'s door',
                // This choice sends you back
                requiredState: (currentState) => currentState.anger,
                setState: { heresy: false},
                nextPath: 11
            },
            {
                text: 'Avoid blasphemy',
                // This choice moves you forward
                requiredState: (currentState) => currentState.anger,
                setState: { heresy: true},
                nextPath: 13
            },
            {
                text: 'Back to the portal room',
                // This choice saves your progress and let you go back to the portal room
                requiredState: (currentState) => currentState.anger,
                setState: { heresy: true},
                nextPath: 5
            },
        ]
    },

    //VIOLENCE
    {
        id: 13,
        text: '"Along the brink of the vermilion boiling, \n Wherein the boiled were uttering loud laments. \n People I saw within up to the eyebrows ',
        options: [
            {
                text: 'Party hard in Sodoma',
                // This choice sends you back
                requiredState: (currentState) => currentState.heresy,
                setState: { violence: false},
                nextPath: 12
            },
            {
                text: 'Progress across the burning plain',
                // This choice moves you forward
                requiredState: (currentState) => currentState.heresy,
                setState: { violence: true},
                nextPath: 14
            },
            {
                text: 'Go clean yourself from the blood',
                // This choice saves your progress and let you go back to the portal room
                requiredState: (currentState) => currentState.heresy,
                setState: { violence: true},
                nextPath: 5
            },
        ]
    },

    //FRAUD
    {
        id: 14,
        text: 'The image of the City in corruption: the progressive disintegration of every social relationship, personal and public. Sexuality, ecclesiastical and civil office, language, ownership, counsel, authority, psychic influence, and material interdependence – all the media of the community\'s interchange are perverted and falsified',
        options: [
            {
                text: 'Make yourself the major of the city',
                // This choice sends you back
                requiredState: (currentState) => currentState.violence,
                setState: { fraud: false},
                nextPath: 13
            },
            {
                text: 'Approach the Central Well',
                // This choice moves you forward
                requiredState: (currentState) => currentState.violence,
                setState: { fraud: true},
                nextPath: 15
            },
            {
                text: 'Disconnect from SinCity at the portal\s room',
                // This choice saves your progress and let you go back to the portal room
                requiredState: (currentState) => currentState.violence,
                setState: { fraud: true},
                nextPath: 5
            },
        ]
    },

    //TREACHERY
    {
        id: 15,
        text: 'The treacheries of these souls were denials of love and of all human warmth. Only the remorseless dead center of the ice will serve to express their natures. As they denied love, so are they furthest removed from the light and warmth of the Sun. As they denied all human ties, so are they bound only by the unyielding ice',
        options: [
            {
                text: 'Take the Judas Kiss',
                // This choice sends you back
                requiredState: (currentState) => currentState.fraud,
                setState: { treachery: false},
                nextPath: 14
            },
            {
                text: 'Go the the center of Hell',
                // This choice moves you forward
                requiredState: (currentState) => currentState.fraud,
                setState: { treachery: true},
                nextPath: 16
            },
            {
                text: 'Rest yourself before visiting the big boss',
                // This choice saves your progress and let you go back to the portal room
                requiredState: (currentState) => currentState.fraud,
                setState: { treachery: true},
                nextPath: 5
            },
        ]
    },

    //CENTER OF HELL
    {
        id: 16,
        text: '... he had three faces: one in front bloodred; \n and then another two that, just above \n the midpoint of each shoulder, joined the first; \n and at the crown, all three were reattached; \n the right looked somewhat yellow, somewhat white; \n the left in its appearance was like those \n who come from where the Nile, descending, flows',
        options: [
            {
                text: 'Wake upt the beast',
                // This choice sends you back
                requiredState: (currentState) => currentState.treachery,
                setState: { artifact: false},
                nextPath: 15
            },
            {
                text: 'Clamber down the beast\'s ragged fur and escape through the genitalia',
                // This choice moves you forward
                requiredState: (currentState) => currentState.treachery,
                setState: { artifact: false},
                nextPath: 5
            },
            {
                text: 'Take the artifact',
                // This choice saves your progress and let you go back to the portal room
                requiredState: (currentState) => currentState.treachery,
                setState: { artifact: true},
                nextPath: 5
            },
        ]
    },



    {
        id: 200,
        text: 'Neither of the path had a happy ending, now you are lost in time but with a chance to return, take the futurama loop over',
        options: [
            {
                text: 'Big Freeze first and then the Big bang',
                // I put -1 so we identify id bigger than 0, your are send back to starting screen
                setState: { timeForwardMachine: true},
                nextPath: -1
            }
        ]
    },

]


//We put it at hte bottom to load once everything is loaded


