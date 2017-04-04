input.onGesture(Gesture.SixG, () => {
    bitbot.neoClear()
    bitbot.neoRainbow()
    bitbot.neoShow()
    for (let i = 0; i < 30; i++) {
        bitbot.neoShow()
        bitbot.neoRotate()
        basic.pause(100)
    }
    bitbot.neoClear()
    bitbot.neoShow()
})
