let tall = 0
input.onGesture(Gesture.Shake, () => {
    tall = Math.random(2)
    if (tall == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.No)
    }
})
