basic.forever(() => {
    if (bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.motor(BBMotor.Left, 1023)
        bitbot.motor(BBMotor.Right, -1023)
    } else if (bitbot.readLine(BBLineSensor.Left) == 1) {
        bitbot.motor(BBMotor.Right, 1023)
        bitbot.motor(BBMotor.Left, -1023)
    } else {
        bitbot.motor(BBMotor.All, 1023)
    }
})
