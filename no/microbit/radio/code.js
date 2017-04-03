input.onButtonPressed(Button.A, () => {
    radio.sendString("Hei!")
})

radio.onDataPacketReceived(({receivedString: tekst}) => {
    if (Math.random(11) == 0) {
        basic.showString(tekst)
    }
})

radio.setGroup(1)
