let grader = 0
basic.forever(() => {
    grader = input.compassHeading()
    if (grader < 45) {
        basic.showString("N")
    } else if (grader < 135) {
        basic.showString("O")
    } else if (grader < 225) {
        basic.showString("S")
    } else if (grader < 315) {
        basic.showString("V")
    } else {
        basic.showString("N")
    }
})
