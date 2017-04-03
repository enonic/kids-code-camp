input.onGesture(Gesture.Shake, () => {
    basic.pause(3000)
    bitbot.motor(bitbot.Motor.All, 1023)
    basic.pause(3000)
    bitbot.motor(bitbot.Motor.All, 0)
})
