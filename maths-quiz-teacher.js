function summer (first: number, second: number, operator: string) {
    basic.showString("" + first)
    basic.showString("" + operator)
    basic.showString("" + second)
    basic.showString("=")
    basic.showNumber(correct)
    basic.pause(100)
    basic.clearScreen()
    same = true
    while (same == true) {
        wrong = Math.randomRange(0, 81)
        if (wrong != correct) {
            same = false
        }
    }
    basic.pause(100)
    basic.clearScreen()
    radio.sendValue("correct", correct)
    radio.sendValue("wrong", wrong)
    radio.sendString("" + first + operator + second)
}
input.onButtonPressed(Button.A, function () {
    if (waiting_for_question) {
        first = Math.randomRange(1, 9)
        second = Math.randomRange(1, 9)
        operator = Math.randomRange(1, 4)
        if (operator == 1) {
            correct = first + second
            summer(first, second, "+")
        } else if (operator == 2) {
            correct = first - second
            summer(first, second, "-")
        } else if (operator == 3) {
            correct = first * second
            summer(first, second, "x")
        } else {
            if (first >= second) {
                correct = first
                first = first * second
            } else {
                correct = first
                first = first * second
            }
            summer(first, second, "/")
        }
        waiting_for_question = false
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Square)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (!(waiting_for_question)) {
        basic.showIcon(IconNames.Yes)
        basic.showString("=" + correct)
        basic.showIcon(IconNames.No)
        basic.showString("=" + wrong)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Score=")
    basic.showNumber(score)
    basic.showString("/")
    basic.showNumber(num_tries)
    basic.clearScreen()
})
radio.onReceivedNumber(function (receivedNumber) {
    if (!(waiting_for_question)) {
        num_tries += 1
        response = receivedNumber
        if (response == correct) {
            score += 1
            for (let index = 0; index <= 4; index++) {
                basic.showIcon(IconNames.Yes)
                basic.clearScreen()
                basic.pause(100)
            }
        } else {
            for (let index = 0; index <= 4; index++) {
                basic.showIcon(IconNames.No)
                basic.clearScreen()
                basic.pause(100)
            }
        }
        basic.showString("Score=")
        basic.showNumber(score)
        basic.showString("/")
        basic.showNumber(num_tries)
        basic.clearScreen()
        radio.sendValue("score", score)
        radio.sendValue("numtries", num_tries)
        basic.pause(100)
        waiting_for_question = true
    }
})
let response = 0
let wrong = 0
let same = false
let correct = 0
let second = 0
let operator = 0
let first = 0
let waiting_for_question = false
let num_tries = 0
let score = 0
radio.setGroup(255)
score = 0
num_tries = 0
waiting_for_question = true
