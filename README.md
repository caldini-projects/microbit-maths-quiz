# Maths Quiz for the BBC micro:bit
A simple maths quiz for two BBC micro:bits. Enjoy hours of randomly generated maths fun.

You will need:
* 2 x BBC micro:bits
* The Microsoft MakeCode [editor](https://makecode.microbit.org/#editor)

Setup:
1. Start a new project in MakeCode and call it maths-quiz-teacher
1. Switch to the JavaScript editor
1. Copy the javascript from maths-quiz-teacher.js into the JavaScript editor
1. Flash it to your first micro:bit
1. Start another new project in MakeCode and call it maths-quiz-pupil
1. Switch to the JavaScript editor
1. Copy the javascript from maths-quiz-pupil.js into the JavaScript editor
1. Flash it to your second micro:bit

How to play:
The teacher sends a sum to the pupil along with the correct answer and an incorrect answer. The pupil receives the sum and then chooses the answer they think is correct by pressing either Button A or Button B. If it is correct their score will get updated by one.

Teacher:
Button A: sends a sum and a correct and incorrect answer to the pupil (disabled while waiting for an answer)
Button B: gives a reminder of the correct and incorrect answer to the teacher (disabled while waiting for a question)
Button A+B: gives a reminder of the current score to the teacher

Pupil:
Button A: sends the answer assigned to Button A to the teacher (once received by the teacher the button will show the answer, but the teacher will not receive it again)
Button B: sends the answer assigned to Button B to the teacher (once received by the teacher the button will show the answer, but the teacher will not receive it again)
Button A+B: shows the current score
Shake: gives a reminder of the sum and the answer assigned to each button 

