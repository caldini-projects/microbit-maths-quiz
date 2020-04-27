input.onButtonPressed(Button.A, function () {
    if (a == correct) {
        for (let index = 0; index <= 4; index++) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
            basic.pause(100)
        }
    } else {
        for (let index2 = 0; index2 <= 4; index2++) {
            basic.showIcon(IconNames.No)
            basic.clearScreen()
            basic.pause(100)
        }
    }
    radio.sendNumber(a)
})
input.onButtonPressed(Button.B, function () {
    if (b == correct) {
        for (let index3 = 0; index3 <= 4; index3++) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
            basic.pause(100)
        }
    } else {
        for (let index4 = 0; index4 <= 4; index4++) {
            basic.showIcon(IconNames.No)
            basic.clearScreen()
            basic.pause(100)
        }
    }
    radio.sendNumber(b)
})
radio.onReceivedString(function (receivedString) {
    basic.pause(100)
    sum = receivedString
    basic.showString(sum)
    randomizer = Math.randomRange(0, 1)
    if (randomizer == 0) {
        a = correct
        b = wrong
    } else {
        a = wrong
        b = correct
    }
    images.arrowImage(ArrowNames.West).showImage(0)
    basic.showNumber(a)
    images.arrowImage(ArrowNames.East).showImage(0)
    basic.showNumber(b)
    basic.showLeds(`
        . # # # .
        . . . . #
        . . # # .
        . . . . .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString(sum)
    images.arrowImage(ArrowNames.West).showImage(0)
    basic.showNumber(a)
    images.arrowImage(ArrowNames.East).showImage(0)
    basic.showNumber(b)
    basic.pause(100)
    basic.clearScreen()
})
radio.onReceivedValue(function (name, value) {
    if (name == "correct") {
        correct = value
    }
    if (name == "wrong") {
        wrong = value
    }
    if (name == "score") {
        score = value
    }
    if (name == "numtries") {
        num_tries = value
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Score=")
    basic.showNumber(score)
    basic.showString("/")
    basic.showNumber(num_tries)
    basic.clearScreen()
})
let num_tries = 0
let score = 0
let wrong = 0
let randomizer = 0
let sum = ""
let b = 0
let correct = 0
let a = 0
radio.setGroup(255)
