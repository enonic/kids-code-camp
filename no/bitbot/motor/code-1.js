input.onGesture(Gesture.Shake, () => {
    basic.pause(3000)
    bitbot.motor(BBMotor.All, 1023)
    basic.pause(3000)
    bitbot.motor(BBMotor.All, 0)
})
