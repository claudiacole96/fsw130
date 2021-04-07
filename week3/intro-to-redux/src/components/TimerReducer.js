const initialState = {
    time: new Date(),
    miliseconds: 0,
    seconds: 0,
    minutes: 0,
    started: false,
    paused: false,
    laps: []
}
  
export function timer() {
    return {
        type: "TIMER"
    }
}
export function start() {
    return {
        type: "START"
    }
} 
export function stop() {
    return {
        type: "STOP"
    }
}
export function lap() {
    return {
        type: "LAP"
    }
}
export function reset() {
    return {
        type: "RESET"
    }
}
  
function TimerReducer(state = initialState, action) {
    switch(action.type) {
        case "TIMER":
            let time = state.time
            let miliseconds = Date.now() - state.time
            let seconds = state.seconds
            let minutes = state.minutes
            if (state.paused) {
                time = new Date(state.time - state.miliseconds)
                miliseconds = Date.now() - time
            }
            if (miliseconds >= 1000) {
                seconds += 1
                time = new Date()
            }
            if (seconds >= 60) {
                seconds = 0
                minutes += 1
            }
            return {
                ...state,
                time: time,
                miliseconds: miliseconds,
                seconds: seconds,
                minutes: minutes,
                paused: false
            }
        case "START":
            let newTime = new Date()
            return {
                ...state,
                time: newTime,
                started: true
            }
        case "STOP":
            return {
                ...state,
                started: false,
                paused: true
            }
        case "LAP":
            let lap = {
                "minutes": state.minutes,
                "seconds": state.seconds,
                "miliseconds": state.miliseconds
            }
            return {
                ...state,
                laps: [...state.laps, lap]
            }
        case "RESET":
            return {
                ...state,
                time: new Date(),
                minutes: 0,
                seconds: 0,
                miliseconds: 0,
                start: false,
                pause: false,
                laps: []
            }
        default:
            return state
    }
}
  
export default TimerReducer