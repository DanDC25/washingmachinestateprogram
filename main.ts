let IDLE = 0
let WASHING = 1
let PAUSED = 2
let DOOROPEN = 3
let DONE = 4
let OFF = 5

let button_A_pressed = false
let button_B_pressed = false
let starting_time = control.millis()
let currentTime = 0


function playsound(){
    for (let i = 0; i < 5; i++) {
        music.playTone(Note.C, music.beat(BeatFraction.Whole))

    }
}

function updateSystem(){
    let starting_time
    
}
