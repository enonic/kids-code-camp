let grader = 0
basic.forever(() => {
    grader = input.compassHeading()
    if (grader < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (grader < 135) {
        basic.showArrow(ArrowNames.East)
    } else if (grader < 225) {
        basic.showArrow(ArrowNames.South)
    } else if (grader < 315) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
