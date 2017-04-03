basic.forever(() => {
    if (bitbot.readLine(bitbot.LineSensor.Right) == 1) {
        bitbot.motor(bitbot.Motor.Left, 1023)
        bitbot.motor(bitbot.Motor.Right, -1023)
    } else if (bitbot.readLine(bitbot.LineSensor.Left) == 1) {
        bitbot.motor(bitbot.Motor.Right, 1023)
        bitbot.motor(bitbot.Motor.Left, -1023)
    } else {
        bitbot.motor(bitbot.Motor.All, 1023)
    }
})
