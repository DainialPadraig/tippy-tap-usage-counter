input.onGesture(Gesture.ScreenUp, function () {
    tip += 1
})
input.onButtonPressed(Button.AB, function () {
    tip = 0
    count = 0
})
let count = 0
let tip = 0
radio.setGroup(42)
tip = 0
count = 0
basic.forever(function () {
    if (tip > 1) {
        count += 1
        tip = 0
        basic.showNumber(count)
        radio.sendNumber(count)
        basic.pause(5000)
        basic.clearScreen()
    }
})
