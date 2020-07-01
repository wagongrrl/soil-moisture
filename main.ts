let reading = 0
basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    reading,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
})
