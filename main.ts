let Baseline = input.magneticForce(Dimension.Strength)
basic.forever(function () {
    if (Math.abs(input.magneticForce(Dimension.Strength) - Baseline) > 100) {
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P0, 1)
        music.playTone(262, music.beat(BeatFraction.Whole))
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        basic.clearScreen()
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showIcon(IconNames.Yes)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
